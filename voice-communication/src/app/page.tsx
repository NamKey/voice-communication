import Header from './common/components/Header';  
import Footer from './common/components/Footer';
import HomeMain from './common/components/HomeMain';
import CertificationSection from './common/components/CertificationSection';
import ServiceModelSection from './common/components/ServiceModelSection';
import UiDescriptionSection from './common/components/UiDescriptionSection';
import ConsultingServiceSection from './common/components/ConsultingServiceSection';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <section className="home">
          <HomeMain />
        </section>

        <section className="certifications">
          <CertificationSection />
        </section>

        <section className="solutions">
          <ServiceModelSection />
        </section>

        <section className="interface">
          <UiDescriptionSection />
        </section>

        <section className="consulting">
          <ConsultingServiceSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}