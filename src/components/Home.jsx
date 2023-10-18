import Banner from "./Banner";
import Brand from "./Brand";
import ContactUs from "./shared/ContactUs";
import Works from "./shared/Works";



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Brand></Brand>
          <Works></Works>
          <ContactUs></ContactUs>
        </div>
    );
};

export default Home;