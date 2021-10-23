//main.js
const data = [
    {
        name : '본사',
        url : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4477.513849547882!2d127.11984792240698!3d37.48242890352716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caf5f00000001%3A0x6296384ca4e09ab2!2z7ZmY7J247KCc7JW9KOyjvCk!5e0!3m2!1sko!2skr!4v1632812852315!5m2!1sko!2skr"
    },
    {
        name : '중앙연구소',
        url : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1587.046672247693!2d127.0418610760395!3d37.29292147876565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b60ee9c540d%3A0x4f48cdfa8c9dfd9e!2z6rK96riw64-E6rK97KCc6rO87ZWZ7KeE7Z2l7JuQ!5e0!3m2!1sko!2skr!4v1632813593161!5m2!1sko!2skr" 
    },
    {
        name : '서울연구소',
        url : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50646.76859005249!2d127.03103236490605!3d37.497939502948114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caf5f00000001%3A0x6296384ca4e09ab2!2z7ZmY7J247KCc7JW9KOyjvCk!5e0!3m2!1sko!2skr!4v1632813640777!5m2!1sko!2skr"
    },
    {
        name : '공장',
        url : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.673611765721!2d127.2476156511263!3d37.01758216303318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b35abedbe184d%3A0x2f233a90b006df3b!2z6rK96riw64-EIOyViOyEseyLnCDslYjshLEz64-ZIOqzteuLqOuhnCA1MA!5e0!3m2!1sko!2skr!4v1632813669665!5m2!1sko!2skr"
    }
]

function changeMap(num) {
    
    var name = data[num].name;
    var url = data[num].url;

    $('#map iframe').attr('src', url);

    //버튼 지움
    $('.tab-group .btn').removeClass('active')
    //버튼 엑티브
    $('.tab-group .btn').eq(num).addClass('active')

}