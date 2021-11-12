const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const player = $('.player')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')

const app = {
  currentIndex: 0,
  isPlaying: false,

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
          <div class="thumb" style="background-image: url('${song.image}')">
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

  defineProperties: function() {
    Object.defineProperty(this, 'currentSong', {
      get:function() {
        return this.songs[this.currentIndex]
      }
    })
  },

  handleEvents: function() {
    const _this = this
    const cdWidth = cd.offsetWidth

    // Xử lý CD rotate
    const cdThumbAnimate = cdThumb.animate([
      { transform: 'rotate(360deg)' }
    ], {
      duration:30000, // 10s
      iterations: Infinity
    })
    cdThumbAnimate.pause()

    // Xử lý scroll cd
    document.onscroll = function() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      const newCdWidth = cdWidth - scrollTop

      cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0 // fix bug
      cd.style.opacity =newCdWidth / cdWidth // opacity when scroll
    }

    // Xử lý play
    playBtn.onclick = function() {
      if (_this.isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
    }

    // Khi song được play
    audio.onplay = function() {
      _this.isPlaying = true
      player.classList.add('playing')
      cdThumbAnimate.play()
    }

    // Khi song bị pause
    audio.onpause = function() {
      _this.isPlaying = false
      player.classList.remove('playing')
      cdThumbAnimate.pause()
    }

    // khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function() {
      if (audio.duration) {
        const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
        progress.value = progressPercent
      }
    }

    //seek
    progress.oninput = function(e){
      const seekTime=(audio.duration/100 * e.target.value)
      audio.currentTime = seekTime
    }

    // Khi next/prev song
    nextBtn.onclick = function() {
      _this.nextSong()
      audio.play()
    }
    prevBtn.onclick = function() {
      _this.prevSong()
      audio.play()
    }

    // Random song
    randomBtn.onclick = function(e) {
      e.target.classList.add('active')
    }
  },

  loadCurrentSong: function() {
    heading.textContent = this.currentSong.name
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
    audio.src = this.currentSong.path
  },

  nextSong: function() {
    this.currentIndex++
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0
    }
    this.loadCurrentSong()
  },

  prevSong: function() {
    if (this.currentIndex != 0) {
      this.currentIndex--
    } else {
      this.currentIndex = this.songs.length - 1
    }
    this.loadCurrentSong()
  },

  start: function() {
    // Định nghĩa các thuộc tính cho Object
    this.defineProperties()

    // Lắng nghe / xử lý các event
    this.handleEvents()

    // tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong()

    // render playlist
    this.render()
  }
}

app.start()


