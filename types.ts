export interface Character {
  id: string;
  name: string;
  engName: string;
  age: string;
  role: string; // e.g., Unemployed, Student, Newlywed
  appearance: string;
  psychology: {
    mbti: string;
    enneagram: string;
    traits: string[];
    logic: string;
  };
  quirk: string;
  speech: string;
  image: string; // URL to image
  color: string; // Theme color for the card
}

export interface LocationInfo {
  name: string;
  description: string;
  time: string;
}
