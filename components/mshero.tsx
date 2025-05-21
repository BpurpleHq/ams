import Image from "next/image";
import Nav from "../components/msnav";
import Link from "next/link";
import CustomButton from './CustomButton';
import Caro from '@/components/slickCar';
import Script from 'next/script'


const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      <Caro />
    </section>
    
  );
  <Script async data-uid="884b9c5595" src="https://bpurple.kit.com/884b9c5595/index.js"></Script>
};

export default HeroSection;

