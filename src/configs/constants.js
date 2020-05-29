export const genderDetails = [
  {
    label: 'Male',
    value: 1,
  },
  {
    label: 'Female',
    value: 2,
  },
];

export const maritalDetails = [
  {
    label: 'Single',
    value: 1,
  },
  {
    label: 'Married',
    value: 2,
  },
  {
    label: 'Divorced',
    value: 3,
  },
];

export const country = [
  {
    label: 'India',
    value: 1,
  },
  {
    label: 'United States',
    value: 2,
  },
  {
    label: 'Afghanistan',
    value: 3,
  },
  {
    label: 'Albania',
    value: 4,
  },
];

export const regex = /\d{5}([- ]*)\d{6}/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const toastMessages = {
  successRegistrationMsg: 'Registered Successfully',
  errorMsg: 'Something wrong happened',
  successLogin: 'Login successful',
  wrongEmailPassword: 'Incorrect email / password. Pleaase check.',
};

export const phoneNumberMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const headerList = [
  {
    label: 'Home',
    redirectTo: '/home',
  },
  {
    label: 'About Us',
    redirectTo: '/aboutus',
  },
  {
    label: 'Services',
    redirectTo: '/services',
  },
  {
    label: 'Our Doctors',
    redirectTo: '/our-doctors',
  },
  {
    label: 'Contact US',
    redirectTo: '/contact',
  },
  {
    label: 'Careers',
    redirectTo: '/careers',
  },
];

export const imageList = [
  '/images/slider-images/slider-baby.jpg',
  '/images/slider-images/slider-baby-blue.jpg',
  '/images/slider-images/slider-theater.jpg',
];

export const sliderConst = {
  startX: '',
  distX: '',
  distY: '',
  threshold: 50, // min distance
  restraint: 100, // maximum distance perpendicular direction
  allowedTime: 200, // maximum time
  elapsedTime: '',
  startTime: '',
};

export const TestimonialInfoList = [
  {
    path: '/images/slider-images/patient1.jpg',
    writeup: `I just want to thank everyone involved with my Brand new knee.
      I am very excited about being able to do the things I love to do,
       like playing with my grand children & working in my yard.
       All you need to do for your healthcare is to check into Wecare Hospitals
       and your well-being is taken care of.`,
    name: 'Andria Martin',
    country: 'Brazil',
  },
  {
    path: '/images/slider-images/patient2.jpg',
    writeup: `I was so impressed with the standards of the hospital and especially the Wonderful attention of all the staff.

    The nursing care is second to none. I had my right knee joint replaced and I was amazed at the speed of my own recovery time.
     I was honored to give a lecture to nurses and staff on Kenya and I wish Wecare Hospitals and its staff all the best for the future.`,
    name: 'David Brown',
    country: 'USA',
  },
  {
    path: '/images/slider-images/patient3.jpg',
    writeup: `The efficiency which I received at 3.00 am upon my arrival at Wecare was comparable to a five star hotel service.
     Wecare's doctors are amazing professionals. The international patients department, the very reason for my visit took care of all our needs,
    and I look forward to my second visit to Wecare for further check-up.`,
    name: 'John Varghese',
    country: 'India',
  },
];

export const newsList = [
  {
    date: '12-02-2020',
    article: `Wecare Hospitals, Indore performs Central India’s first complex cardiac surgery by implanting a permanent pacemaker on a two-day-old newborn baby.
    The newborn was suffering from congenital heart block with a heart rate of less than 50 beats per min which is much lesser than normal.
    `,
  },
  {
    date: '29-04-2020',
    article: `Amidst the COVID-19 situation, Wecare Hospitals, Delhi successfully performed a liver transplant surgery on a 10-month-old Malaysian baby.
    Baby Noor soon after birth had developed jaundice that worsened with time. She was further diagnosed with biliary atresia and heterotaxy.`,
  },
  {
    date: '02-03-2020',
    article: `Wecare Hospitals Group has launched the Ask Wecare Skill, an Amazon Alexa Skill to enable users find the nearest Wecare hospital
     and book an appointment with doctors.The Ask Wecare Skill will provide users access to over 5,000 doctors across 72 Wecare hospitals and to over 3,500 pharmacies throughout the country.`,
  },
  {
    date: '21-01-2020',
    article: `Wecare Hospitals, Hyderabad has successfully performed combined procedures of
     Living Donor Liver Transplantation and Coronary Artery Bypass Graft on a patient in a single sitting.
     he patient was suffering from liver cirrhosis and liver cancer. Further evaluation 
     revealed heart disease which was significant enough to preclude performing a liver transplant.`,
  },
];
