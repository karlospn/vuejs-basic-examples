 var growler = new Vue({
                el: '#growler',
                data: {
                    appName: 'Growler',
                    appLogo: './public/img/logo.jpg',
                    inputQuery: '',
                    changeQuery: '',
                    searchIndexes: [],
                    searchIndex: 'ValueA',
                    selectedSearchIndex: 'ValueA'
                }
            });