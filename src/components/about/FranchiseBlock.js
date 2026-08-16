import FranchiseInquiryModal from "../FranchiseInquiryModal";

const CHECKLIST = [
  "Proven, family-loved model across multiple locations",
  "Full playbook, training, and ongoing support",
  "Trusted brand parents already recognize",
  "A mission worth building",
];

const FranchiseBlock = () => {
  return (
    <section className="franchise-block">
      <div className="container">
        <div className="inner">
          <span className="eyebrow">Own a Brighter Launchpad</span>
          <h2>Believe in This? Build It in Your Community.</h2>
          <p className="body">
            Brighter Launchpad is a growing childcare brand supported by
            established experience, proven systems, and a shared vision. If
            you want to run a meaningful business that families rely on —
            with a partner who&apos;s already done it — we&apos;d love to
            talk.
          </p>
          <ul className="tf-check-list">
            {CHECKLIST.map((item) => (
              <li key={item}>
                <i className="fas fa-check" aria-hidden="true" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <FranchiseInquiryModal className="fl-btn st-12">
            <span className="inner">Explore Franchise Opportunities</span>
          </FranchiseInquiryModal>
        </div>
      </div>
    </section>
  );
};

export default FranchiseBlock;
