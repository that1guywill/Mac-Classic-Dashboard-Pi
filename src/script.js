function updateDate() {
    let dt = new Date();

    function english_ordinal_suffix(dt)
    {
        return dt.getDate()+(dt.getDate() % 10 == 1 && dt.getDate() != 11 ? 'st' : (dt.getDate() % 10 == 2 && dt.getDate() != 12 ? 'nd' : (dt.getDate() % 10 == 3 && dt.getDate() != 13 ? 'rd' : 'th')));
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let month = monthNames[dt.getMonth()];
    let year = dt.getFullYear();

    document.getElementById('date').innerHTML = (english_ordinal_suffix(dt) + ' of ' + month + ', ' + year) ;
}
