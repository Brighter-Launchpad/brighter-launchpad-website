import ApplyChildModal from "../ApplyChildModal";
import FranchiseInquiryModal from "../FranchiseInquiryModal";

const ClosingDualCTA = () => {
  return (
    <section className="tf-section">
      <div className="container">
        <div className="tf-cta-band wow fadeIn animated">
          <h2 className="title clr-pri-2">Ready for a Brighter Future?</h2>
          <div className="dual-cta-grid">
            <div>
              <h3>For Families</h3>
              <p>Give your child a safe, joyful place to grow.</p>
              <ApplyChildModal className="fl-btn st-12">
                <span className="inner">Apply Your Child</span>
              </ApplyChildModal>
            </div>
            <div>
              <h3>For Entrepreneurs</h3>
              <p>Bring quality childcare to your community.</p>
              <FranchiseInquiryModal className="fl-btn st-1">
                <span className="inner">Own a Franchise</span>
              </FranchiseInquiryModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingDualCTA;
