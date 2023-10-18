import Banner from "./Banner";
import Cards from "./Cards";
import ContactUs from "./shared/ContactUs";
import Works from "./shared/Works";



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Cards></Cards>
          <Works></Works>
          <ContactUs></ContactUs>
        </div>
    );
};

export default Home;