export interface Phone {
    id: string;
    name: string;
    additionalFeatures: string;
    android: {
      os: string;
      ui: string;
    };
    availability: string[];
    battery: {
      standbyTime: string;
      talkTime: string;
      type: string;
    };
    camera: {
      features: string[];
      primary: string;
    };
    connectivity: {
      bluetooth: string;
      cell: string;
      gps: boolean;
      infrared: boolean;
      wifi: string;
    };
    description: string;
    display: {
      screenResolution: string;
      screenSize: string;
      touchScreen: boolean;
    };
    hardware: {
      accelerometer: boolean;
      audioJack: string;
      cpu: string;
      fmRadio: boolean;
      physicalKeyboard: boolean;
      usb: string;
    };
    images: string[];
    imageUrl: string;
    price: string;
    sizeAndWeight: {
      dimensions: string[];
      weight: string;
    };
    snippet: string;
    storage: {
      flash: string;
      ram: string;
    };
  }

  

// export interface Phone {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     imageUrl: string;
// }

  