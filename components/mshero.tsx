import Image from "next/image";
import Nav from "../components/msnav";
import Link from "next/link";
import CustomButton from './CustomButton';
import Caro from '@/components/slickCar'


const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      <Caro />
    </section>
    
  );
};

export default HeroSection;

