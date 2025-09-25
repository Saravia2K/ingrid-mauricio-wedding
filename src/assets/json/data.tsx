import fs from "fs";
import path from "path";

const historyPath = path.join(process.cwd(), "/src/history.txt");
const history = fs.readFileSync(historyPath, {
  encoding: "utf-8",
  flag: "r",
});

const DATA = {
  date: "2025-11-29",
  hour: "17:00",
  song: {
    name: "All my love",
    author: "Coldplay",
    url: "/assets/audios/all-my-love--coldplay.mp3",
  },
  history,
  videoUrl: "/assets/videos/proposal.mp4",
  maps: {
    google: "https://maps.app.goo.gl/wB4FFwsZvFm7pjzx8?g_st=ipc",
    waze: "https://ul.waze.com/ul?place=ChIJdUVYLIqXYo8R0XVGQRaRBBo&ll=13.99204900%2C-89.77570130&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
  },
  address: {
    firstLine: "Calle al Agua Caliente, cantón Lomas de Alarcón",
    secondLine: "A 2.5 km de Atiquizaya",
  },
};

export default DATA;
