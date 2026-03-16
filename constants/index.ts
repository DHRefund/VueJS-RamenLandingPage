interface NavLink {
  id: string;
  title: string;
}

interface RamenItem {
  name: string;
  country: string;
  detail: string;
  price: string;
}

interface ProfileItem {
  imgPath: string;
}

interface StoreInfo {
  heading: string;
  address: string;
  contact: {
    phone: string;
    email: string;
  };
}

interface OpeningHour {
  day: string;
  time: string;
}

interface Social {
  name: string;
  icon: string;
  url: string;
}

interface Cocktail {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
}

const navLinks: NavLink[] = [
  { id: "Booking", title: "Booking" },
  { id: "Checking", title: "Checking" },
  { id: "About Us", title: "About Us" },
  { id: "contact", title: "Contact" },
];

const cocktailLists: RamenItem[] = [
  { name: "豚骨ラーメン", country: "AU", detail: "Battle", price: "1000¥" },
  { name: "醤油ラーメン", country: "AU", detail: "Battle", price: "1000¥" },
  { name: "味噌ラーメン", country: "CA", detail: "750 ml", price: "1000¥" },
  { name: "塩ラーメン", country: "IE", detail: "600 ml", price: "1000¥" },
];

const mockTailLists: RamenItem[] = [
  { name: "豚骨ラーメン", country: "AU", detail: "Battle", price: "1000¥" },
  { name: "醤油ラーメン", country: "AU", detail: "Battle", price: "1000¥" },
  { name: "味噌ラーメン", country: "CA", detail: "750 ml", price: "1000¥" },
  { name: "塩ラーメン", country: "IE", detail: "600 ml", price: "1000¥" },
];

const profileLists: ProfileItem[] = [
  { imgPath: "/images/profile1.png" },
  { imgPath: "/images/profile2.png" },
  { imgPath: "/images/profile3.png" },
  { imgPath: "/images/profile4.png" },
];

const featureLists: string[] = [
  "厳選された食材",
  "職人の技",
  "本格的なラーメン作り",
  "毎日仕込む新鮮なスープ",
];

const goodLists: string[] = [
  "絶妙に調和した味",
  "丁寧に仕上げたトッピング",
  "いつでも熱々の一杯",
  "職人が仕上げる一杯",
];

const storeInfo: StoreInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
};

const openingHours: OpeningHour[] = [
  { day: "月曜日–金曜日", time: "11:00am – 12am" },
  { day: "土曜日–日曜日", time: "11:00am – 2am" },
];

const socials: Social[] = [
  { name: "Instagram", icon: "/images/insta.png", url: "#" },
  { name: "X (Twitter)", icon: "/images/x.png", url: "#" },
  { name: "Facebook", icon: "/images/fb.png", url: "#" },
];

const allCocktails: Cocktail[] = [
  {
    id: 1,
    name: "豚骨ラーメン",
    image: "/new/ramen1.png",
    title: "濃厚な旨味、一口で虜になる",
    description:
      "豚の骨をじっくり煮込んだ白濁スープが特徴。クリーミーでコクのある味わいは、一度食べたら忘れられない深い満足感をもたらします。",
  },
  {
    id: 2,
    name: "醤油ラーメン",
    image: "/new/ramen2.png",
    title: "伝統の味、今も変わらぬ一杯",
    description:
      "醤油ベースの澄んだスープに、しっかりとしたコクと香りが溶け込んでいます。シンプルながらも奥深い、日本の定番ラーメンです。",
  },
  {
    id: 3,
    name: "味噌ラーメン",
    image: "/new/ramen3.png",
    title: "芳醇な味噌の香り、心まで温まる",
    description:
      "北海道発祥の味噌ラーメンは、濃厚でコクのある味噌スープが特徴。寒い冬の夜に、体の芯からじんわりと温めてくれる一杯です。",
  },
  {
    id: 4,
    name: "塩ラーメン",
    image: "/new/ramen4.png",
    title: "繊細な塩味、素材の旨味が輝く",
    description:
      "あっさりとした塩ベースのスープは、素材本来の旨味を最大限に引き出します。どんな気分の日にも、心地よく寄り添う上品な一杯です。",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};