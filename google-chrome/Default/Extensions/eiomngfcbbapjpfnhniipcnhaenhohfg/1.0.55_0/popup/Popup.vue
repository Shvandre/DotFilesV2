<template>
    <div class="modal-dark__dialog">
        <div v-if="ads_link" class="modal-dark__header">
           <span class="close" id="close" @click="hiddenAds" >☒</span>
           <a target="_blank" :href="ads_link">
             <img :src="img_link">
           </a>
        </div>
        <div class="modal-dark__content" :class="{'modal-dark__content--off' : active}">
            <div @click="toggleAllTurnOn" class="modal-dark__state">
                <img src="img/icn-power-on.svg" alt="On">
                <span v-if="!active">{{ turnOnText }}</span>
                <span v-if="active">{{ turnOffText }}</span>
            </div>

            <span class="modal-dark__content-link">{{ hostname }}</span>

            <div v-if="domain" class="modal-dark__content-note">
                This site has been added to exceptions
            </div>

            <button @click="toggleTurnOn" v-if="!domain" type="button" class="modal-dark__btn modal-dark__btn--on">
              {{ btnTextOn }}
            </button>
            <button @click="toggleTurnOn" v-else type="button" class="modal-dark__btn">
              {{ btnTextOff }}
            </button>
        </div>
        <div class="modal-dark__footer">
            <a target="_blank" href="/settings.html">
                Settings
            </a>
        </div>
    </div>
</template>

<script>
    const LS = {
        getAllItems: () => chrome.storage.local.get(),
        getItem: async key => (await chrome.storage.local.get(key))[key],
        setItem: (key, val) => chrome.storage.local.set({[key]: val}),
        removeItems: keys => chrome.storage.local.remove(keys),
    };
    
    export default {
        name: "Popup",

        data() {
            return {
                turnOnText: 'On',
                turnOffText: 'Off',
                btnTextOn: 'Ignore this site',
                btnTextOff: 'Enable for this site',
                hostname: '',
                domain: true,
                active: true,
                domains: [],
                enable: "/img/enable.png",
                disable: "/img/disable.png",
                ads_link: null,
                img_link: null
            }
        },

        created() {
          let self = this;

          chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
            self.active = await LS.getItem('active');
            let url = new URL(tabs[0].url);
            self.hostname = url.hostname
            let dm = await LS.getItem('dms');
            self.domains = dm?dm:[];
            self.domain = !!self.domains[self.hostname];

            let ads = await LS.getItem('ads');
            let max = ads.length - 1;
            let num = Math.floor(Math.random() * (max + 1));
            
            self.ads_link = ads[num].link;
            self.img_link = "https://darktheme.app"+ads[num].imageUrl;


          });
        },

        methods: {

            hiddenAds() {
              this.ads_link = null;
              this.img_link = null;
              this.preventDefault();
              alert();
            },
          
            toggleTurnOn() {
                let self = this;
                chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
                    let url = new URL(tabs[0].url);
                    let dm = await LS.getItem('dms');
                    self.domains = dm?dm:[];
                    let dom = !!self.domains[url.hostname];

                    if (dom) {
                        delete self.domains[url.hostname];
                        self.domain = !!self.domains[self.hostname];
                    } else {
                        self.domains[url.hostname] = {
                            title: url.hostname,
                            url: url.hostname
                        };
                        self.domain = !!self.domains[self.hostname];
                    }
                    
                    await LS.setItem('dms', self.domains);

                  chrome.runtime.sendMessage({type: "updateExeption"}, function () {
                    chrome.scripting.executeScript({
                      target: {tabId: tabs[0].id},
                      func: () => {
                        location.reload();
                      },
                    });
                  });

                });
              
            },

            toggleAllTurnOn() {
              let self = this;
              
              console.log('self.active', self.active);
              
              if (self.active === true) {
                chrome.action.setIcon({path: {"38": this.enable}});

                chrome.tabs.query({active: true, currentWindow: true}, async function (tabs) {
                  await LS.setItem('active', false);
                  self.active = false;
                  chrome.runtime.sendMessage({type: "updateExeption"}, function () {
                    chrome.scripting.executeScript({
                      target: {tabId: tabs[0].id},
                      func: () => {
                        location.reload();
                      },
                    });
                  });
                
                });

              } else {
                chrome.action.setIcon({path: {"38": this.disable}});
                chrome.tabs.query({active: true, currentWindow: true}, async function (tabs) {
                  await LS.setItem('active', true);
                  self.active = true;
                  chrome.runtime.sendMessage({type: "updateExeption"}, function () {
                    chrome.scripting.executeScript({
                      target: {tabId: tabs[0].id},
                      func: () => {
                        location.reload();
                      },
                    });
                  });

                });
              }
                
                
            },
            
        },
    }
</script>