export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Spotify Overlay Music",
    description: "An Overlay that shows the lyrics of the song being played on Spotify.",
    technologies: ["Python", "React", "Typescript", "Vite", "Electron"],
    githubUrl: "https://github.com/Linkado36778/Spotify_Overlay_Music"
  },
  {
    title: "Raspberry Pi HC-SR04 Driver",
    description: "A Linux kernel module driver for the HC-SR04 ultrasonic distance sensor, developed for Raspberry Pi.",
    technologies: ["C", "Linux Kernel", "Embedded Systems", "Raspberry Pi"],
    githubUrl: ""
  },
  {
    title: "ByDev",
    description: "An IoT system designed to detect and monitor fire hazards, utilizing sensors to send real-time alerts.",
    technologies: ["C++", "IoT", "ESP32", "MQTT", "Typescript", "React-Native"],
    githubUrl: "https://github.com/Linkado36778/ByDev"
  },
  {
    title: "Gesture Controlled Robotic Arm",
    description: "A robotic arm controlled via hand gestures, capturing motion through sensors and translating it to robotic movements.",
    technologies: ["Python", "Arduino", "Computer Vision", "C++"],
    githubUrl: "https://github.com/And5reas/Bra-o_robo"
  },
  {
    title: "MoreLife",
    description: "A wearable device meant to monitor heart rate and detect anomalies, sending data to a connected application.",
    technologies: ["C++", "Embedded Systems", "Python", "Signal Processing", "Arduino", "Kivy"],
    githubUrl: "https://github.com/And5reas/MoreLifeProjectt"
  }
];
