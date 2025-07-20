import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: '60W Adjustable Temperature Soldering Iron Kit',
    description: 'A complete kit for hobbyists, including a 60W soldering iron, multiple tips, solder wire, stand, and a desoldering pump.',
    price: 499,
    originalPrice: 699,
    category: 'soldering',
    image: 'https://m.media-amazon.com/images/I/51YvtSidaEL.jpg',
    rating: 4.5,
    reviews: 152,
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Arduino Uno R3 Development Board',
    description: 'The classic open-source microcontroller board for building all kinds of interactive electronic projects. Features the ATmega328P.',
    price: 550,
    category: 'boards',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg',
    rating: 4.9,
    reviews: 1230,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'HC-SR04 Ultrasonic Sensor Module',
    description: 'Popular distance measuring sensor for robotics and automation projects. Provides stable non-contact readings from 2cm to 400cm.',
    price: 99,
    category: 'sensor-modules',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR6m6uQloSrOPWyLBltR44wRz_94USC9dOl6mie_h49AAEfDHoTU3B8w4Mgum49ZkBPz6QZhKpn25PZSwoWR9qCxFDabRd2XJRfFeTjCH7x-Y1X3PrL4a12RFs',
    rating: 4.7,
    reviews: 850,
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'L298N Motor Driver Module',
    description: 'A dual-channel H-Bridge motor driver perfect for controlling DC motors and stepper motors in robotics projects.',
    price: 149,
    category: 'motor-drivers',
    image: 'https://robu.in/wp-content/uploads/2015/10/L298N-Based-Motor-Driver-Module-%E2%80%93-2A-4.jpg',
    rating: 4.6,
    reviews: 432,
    inStock: true
  },
  {
    id: '5',
    name: 'NEMA 17 Stepper Motor',
    description: 'High-torque stepper motor, ideal for 3D printers, CNC machines, and precision robotics. 1.8-degree step angle, 42mm body.',
    price: 899,
    category: 'motors',
    image: 'https://m.media-amazon.com/images/I/61krZk5r7-L.jpg',
    rating: 4.8,
    reviews: 215,
    inStock: true
  },
  {
    id: '6',
    name: '18650 Li-Ion Rechargeable Battery - 2200mAh',
    description: 'A high-capacity 3.7V Lithium-Ion battery cell, commonly used in power banks, flashlights, and custom electronics.',
    price: 199,
    category: 'batteries',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTeUsj1iZaTyM0h6QrjWx88No9SS-QBIApfAJHQbxNkswStDTGy04tyGlenCNo8oI7XebFE0tOToSVZ30OtZRJHQ4l3Hqa4q0zV8c5nipvVufTsmQEPU7_aQw',
    rating: 4.4,
    reviews: 305,
    inStock: true
  },
  {
    id: '7',
    name: 'ESP8266 NodeMCU WiFi Module',
    description: 'A low-cost WiFi-enabled microcontroller. Perfect for IoT projects to connect your creations to the internet.',
    price: 349,
    originalPrice: 400,
    category: 'wireless-modules',
    image: 'https://m.media-amazon.com/images/I/611SuZX5oYL.jpg',
    rating: 4.8,
    reviews: 987,
    inStock: true,
    isNew: true
  },
  {
    id: '8',
    name: 'Digital Multimeter DT830D',
    description: 'An essential tool for any electronics workbench. Measures voltage, current, and resistance with a clear LCD display.',
    price: 299,
    category: 'voltmeters',
    image: 'https://m.media-amazon.com/images/I/71ztvBCSN1L.jpg',
    rating: 4.3,
    reviews: 512,
    inStock: true
  },
  {
    id: '9',
    name: '4xAA Battery Holder with Cover and Switch',
    description: 'A durable plastic holder for four AA batteries to provide 6V power to your projects, complete with a protective cover and on/off switch.',
    price: 49,
    category: 'battery-holders',
    image: 'https://m.media-amazon.com/images/I/512pFCxqc2L.jpg',
    rating: 4.9,
    reviews: 670,
    inStock: true
  },
    {
    id: '10',
    name: 'MB102 Breadboard Power Supply Module',
    description: 'Easily power your solderless breadboard projects. Provides dual 3.3V and 5V power rails, plugs directly onto the board.',
    price: 79,
    category: 'power-boards',
    image: 'https://m.media-amazon.com/images/I/41+gttgthMS._AC_UF1000,1000_QL80_.jpg',
    rating: 4.7,
    reviews: 789,
    inStock: false
  }
];