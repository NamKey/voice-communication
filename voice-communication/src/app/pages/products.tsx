import Header from '../common/components/Header';    
import Footer from '../common/components/Footer';
import ServiceModel from '../common/components/ServiceModel';

const AllInOne: React.FC = () => (
  <div>
    <Header />
    <main>
      <h1>All-In-One Service Model</h1>
      <p>Comprehensive H/W and S/W solutions for advanced ARS systems.</p>
      <button>Get Started</button>
      <button>Learn More</button>
      <section>
        <h2>Choose Your Ideal Solution</h2>
        <ServiceModel
            icon="👍"
          title="Enterprise Model"
          description="Full ownership and control with complete system installation and customization options."
          features={['Complete system ownership', 'Customizable solutions', 'On-premise deployment']}
        />
        <ServiceModel
            icon="👍"
          title="Rental Model"
          description="Flexible rental options with full service support and maintenance included."
          features={['Low initial investment', 'Regular maintenance included', 'Flexible contract terms']}
        />
        <ServiceModel
            icon="👍"
          title="Subscription Model"
          description="Pay-as-you-go model with scalable resources and continuous updates."
          features={['Usage-based pricing', 'Automatic updates', 'Cloud-based solution']}
        />
      </section>
    </main>
    <Footer />
  </div>
);

export default AllInOne;