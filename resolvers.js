const books = [
  {
    id: 'Qm9vazox',
    title: 'Webを支える技術 HTTP、URI、HTML、そしてREST (WEB+DB PRESS plus)',
    author: '山本 陽平',
    year: 2010,
    isbn: "978-4-7741-4204-3",
    series: "WEB+DB PRESS plus",
    price: "2,827円（本体2,570円＋税10%）",
    url: "https://gihyo.jp/book/2010/978-4-7741-4204-3",
    imageUrl: "http://image.gihyo.co.jp/assets/images/cover/2010/9784774142043.jpg",
    publishedDate: "2010-04-08",
    description: "この本の概要\nWebは誕生から20年で爆発的な普及を果たし17億人のユーザと2億台のサーバを抱える巨大システムへと成長しました。....",
    genreMajor: "プログラミング・システム開発",
    genreMinor: "Webアプリケーション開発",
    retail: {
      direct: "https://direct.gihyo.jp/xxxxxxxxxx",
      amazon: "https://www.amazon.co.jp/yyyyyyyyy",
      rakutenBooks: "https://books.rakuten.co.jp/zzzzzz"
    },
  },
  {
    id: 'Qm9vazoy',
    title: '失敗から学ぶRDBの正しい歩き方 (Software Design plus)',
    author: '曽根 壮大',
    year: 2019,
    isbn: "978-4-297-10408-5",
    url: "https://gihyo.jp/book/2019/978-4-297-10408-5",
    series: "Software Design plus",
    price: "3,014円（本体2,740円＋税10%）",
    url: "https://gihyo.jp/book/2019/978-4-297-10408-5",
    imageUrl: "http://image.gihyo.co.jp/assets/images/cover/2019/9784297104085.jpg",
    publishedDate: "2019-03-06"
  },
  {
    id: 'Qm9vazoz',
    title: "Vue.js入門 基礎から実践アプリケーション開発まで",
    author: "川口和也，喜多啓介，野田陽平，手島拓也，片山真也",
    isbn: "978-4-297-10091-9",
    series: null,
    year: 2018,
    price: "3,718円（本体3,380円＋税10%）",
    url: "https://gihyo.jp/book/2018/978-4-297-10091-9",
    imageUrl: "http://image.gihyo.co.jp/assets/images/cover/2018/9784297100919.jpg",
    publishedDate: "2018-09-22"
  },
];

const relatedBooks = [{
  id: "Qm9vazo0",
  title: "Web配信の技術 ―HTTPキャッシュ・リバースプロキシ・CDNを活用する",
  year: 2021,
  isbn: "978-4-297-11925-6",
  url: "https://gihyo.jp/book/2021/978-4-297-11925-6",
  summary: "HTTPキャッシュ，リバースプロキシ，CDNなどWeb開発で大切な「配信」の技術。...",
  imageUrl: "http://image.gihyo.co.jp/assets/images/cover/2021/9784297119256.jpg",
}, {
  id: "Qm9vazo1",
  title: "超速！ Webページ速度改善ガイド ──使いやすさは「速さ」から始まる",
  year: 2017,
  isbn: "978-4-7741-9400-4",
  url: "https://gihyo.jp/book/2017/978-4-7741-9400-4",
  summary: "本書では「超速！」と銘を打って，Webページの速度を改善するためのノウハウを紹介します。...",
  imageUrl: "http://image.gihyo.co.jp/assets/images/cover/2017/9784774194004.jpg",
}]
const reports = [{
  id: "UmVwb3J0OjE=",
  title: "『Webを支える技術』刊行記念トークセッションレポート",
  url: "https://gihyo.jp/news/report/2010/08/1801",
  summary: "2010年4月8日（木）19時から，ジュンク堂書店池袋本店4階のカフェにて，...",
  content: "2010年4月8日（木）19時から，ジュンク堂書店池袋本店4階のカフェにて，..."
}, {
  id: "UmVwb3J0OjI=",
  title: "［祝］12冊記念！ WEB+DB PRESS plusシリーズ大集合",
  url: "https://gihyo.jp/book/longseller/2010/0001",
  summary: "刻々と移り変わる情報技術，インターネットの業界。...",
  content: "刻々と移り変わる情報技術，インターネットの業界。..."
}]

const topics = [{
  id: "VG9waWM6MQ==",
  title: "『運用設計の教科書』『運用改善の教科書』の著者、近藤誠司氏が6/26のOSC2021 Online/Hokkaidoで講演します",
  url: "https://gihyo.jp/book/topics?cid=313",
  category: "イベント・キャンペーン",
  publishedDate: "2021-06-04",
}, {
  id: "VG9waWM6Mg==",
  title: "『やさしくわかるデジタル時代の情報モラル』『親子でかんたん スクラッチプログラミングの図鑑 【Scratch 3.0対応版】』著者の松下孝太郎氏が朝日新聞EduAにてインタビューされました",
  url: "https://gihyo.jp/book/topics?cid=312",
  category: "その他",
  publishedDate: "2021-04-28",
}, {
  id: "VG9waWM6Mw==",
  title: "3月18日（木）19-20時　朝日新聞社主催オンラインリレーイベント「SDGs書籍の著者に聞く」に『60分でわかる！SDGs超入門』監修者が登壇します",
  url: "https://gihyo.jp/book/topics?cid=309",
  category: "イベント・キャンペーン",
  publishedDate: "2021-01-28",
}]

const bookMajorGenres = [
  "パソコン",
  "プログラム・システム開発",
  "ネットワーク・UNIX・データベース",
]

const magazines = [
  {
    id: 'TWFnYXppbmU6MQ==',
    title: 'Software Design 2021年6月号',
    publisher: '技術評論社',
  },
  {
    id: 'TWFnYWdpbmU6Mg==',
    title: 'WEB+DB PRESS Vol.123',
    publisher: '技術評論社'
  },
]

const resolvers = {
  Query: {
    allBooks: () => books,
    getBook: (_, { isbn }) => books.find(b => b.isbn === isbn),
    allMagazines: () => magazines,
    allMaterials: () => books.concat(magazines),
    topics: () => topics,
    bookMajorGenres: () => bookMajorGenres,
  },
  Mutation: {
    addBook: (_, { input }) => Object.assign(input, { id: "10" })
  },
  Book: {
    relatedBooks: () => relatedBooks,
    relatedReports: () => reports,
  },
  Material: {
    __resolveType: (obj) => {
      if (obj.isbn) {
        return 'Book';
      } else {
        return 'Magazine'
      }
    }
  }
};

module.exports = resolvers
