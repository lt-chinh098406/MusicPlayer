const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {
  songs: [
    {
      name: 'Yêu em qua từng dòng tin nhắn',
      singer: 'Nger ft. nân',
      path: './assets/music/Yêu em qua dòng tin nhắn(iêu iem qua dòng tin nhắn) - Ngơ ft. Nân [Lyrics Video].mp3',
      image: './assets/img/1.jpg'
    },
    {
      name: 'Anhs & Ems',
      singer: 'QNT x RZMAS x WXRDIE (Prod. by RASTZ)',
      path: './assets/music/ChillnFree - Anhs & Ems - QNT x RZMAS x WXRDIE (Prod. by RASTZ).mp3',
      image:
        './assets/img/2.jpg'
    },
    {
      name: 'ÔNG TRỜI LÀM TỘI ANH CHƯA',
      singer: 'MINH HANH x RASTZ x QNT ft. TUẤN CRY',
      path:
        './assets/music/ÔNG TRỜI LÀM TỘI ANH CHƯA - MINH HANH x RASTZ x QNT ft. TUẤN CRY.mp3',
      image: './assets/img/3.jpg'
    },
    {
      name: 'An Thần',
      singer: 'Low G ft. Thắng',
      path: './assets/music/An Thần (ft. Thắng) - Low G - Rap Nhà Làm.mp3',
      image:
        './assets/img/4.png'
    },
    {
      name: '\'bao tiền một mớ bình yên?\'',
      singer: '14 Casper & Bon',
      path: './assets/music/\'bao tiền một mớ bình yên-\' - 14 Casper & Bon (Official).mp3',
      image:
        './assets/img/5.jpg'
    },
    {
      name: 'Tự Tình',
      singer: 'Quang Huy ft. Minh Triều',
      path:
        './assets/music/Tự Tình - Quang Huy ft. Minh Triều 「Official MV」.mp3',
      image:
        './assets/img/6.jpg'
    },
    {
      name: 'Mascara ',
      singer: 'Chillies x BLAZE',
      path: './assets/music/Mascara - Chillies x BLAZE [OFFICIAL MUSIC VIDEO].mp3',
      image:
        './assets/img/7.jpg'
    }
  ],

  render: function() {
    const htmls = this.songs.map(song => {
      return `
        <div class="song">
          <div class="thumb" style="background-image: url('${song.image}'')">
          </div>
          <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
          </div>
          <div class="option">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
      `
    })
    $('.playlist').innerHTML = htmls.join('')
  },

  start: function() {
    this.render()
  }
}

app.start()


