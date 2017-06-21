 var growler = new Vue({
                el: '#growler',
                data: {
                    appName: 'Growler',
                    appLogo: './public/img/logo.jpg',
                    inputQuery: '',
                    changeQuery: '',
                    searchIndexes: [],
                    searchIndex: 'ValueA',
                    selectedSearchIndex: 'ValueA',
                    keypressModel: ''
                },
                methods: {
                    executeSearch: function(t, event) {
                        alert("Event: " + event + " Event target:" + event.target);
                        alert("Parameter: "+ t);
                    },
                    grandparentClick: function(){
                        alert("Grandparent");
                    },
                    parentClick: function(){
                        alert("Parent");
                    },
                    childClick: function(){
                        alert("Child");
                    },
                    evaluateKey: function(){
                        alert("Key press!");
                    },
                   evaluateCustomKeyEvent: function(){
                        alert("F1 press!");
                    },
                    MouseLeftClick: function(){
                        alert("Left Click!!");
                    }
                }
            });

Vue.config.keyCodes = {
    f1: 112   
};