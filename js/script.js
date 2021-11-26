

const app = new Vue(
    {
        el: "#root",
        data: {
            currentImage : 0,
            items : [
                'img/01.jpg',
                'img/02.jpg',
                'img/03.jpg',
                'img/04.jpg',
                'img/05.jpg'
            ],
            title : [
                'Svezia',
                'Svizzera',
                'Gran Bretagna',
                'Germania',
                'Paradise'
            ],
            text : [
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                'Lorem ipsum',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            ],
        },
        methods: {
            arrowUp : function() {
                if(this.currentImage == 0){
                    this.currentImage = this.items.length - 1;
                } else {
                    this.currentImage--;
                }
            },
            arrowDown: function () {
                if (this.currentImage == this.items.length - 1) {
                    this.currentImage = 0;
                } else {
                    this.currentImage++;
                }
            },
            click1 : function (index) {
                this.currentImage = index;
            }
        },
    }
);