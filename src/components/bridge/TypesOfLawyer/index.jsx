
import FAQ from '@/components/ui/FAQ';
import parse from 'html-react-parser';
const classes = {
  question: 'talk-to-faq-question',
  container: 'lawyer-faq-container',
  chevron: 'faqs-chevron',
};

const styles = {
  icon: {
    color: '#000',
  },
};
const TypesSection = ({ data, isMobile }) => {
  return (
    <section className="why-vakilsearch-section">
      <h2 className="section-title">{data.title}</h2>
      <div className="typesContainer">
        <div className="typessubcontainer">
          {data.description && (
            <h3 className="typesDescription">{parse(data.description)}</h3>
          )}
        </div>
      </div>
      {isMobile ? (
        data?.types ? (
          <FAQ faqData={data.types} classes={classes} externalStyles={styles} />
        ) : null
      ) : (
        <div className="typesContainer">
          {data.types?.map((type) => (
            <div className="typessubcontainer">
              <h3 className="typesSubtitle">{type.question}</h3>
              <h4 className="typesDescription">{parse(type.answer)}</h4>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TypesSection;