import Header from '../common/components/Header';
import Footer from '../common/components/Footer';  

const Products: React.FC = () => (
  <div>
    <Header />
    <main>
      <h1>Our Solutions</h1>
      <p>Explore our comprehensive range of solutions tailored to your needs.</p>
      <section>
        <h2>Featured Solutions</h2>
        {/* 솔루션 정보 추가 */}
      </section>
    </main>
    <Footer />
  </div>
);

export default Products;