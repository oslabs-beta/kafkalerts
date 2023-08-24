import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleFeature = ({ feature }) => {
  const { icon, header, text } = feature;
  return (
    <div className='single-feature'>
      <FontAwesomeIcon icon={('fa-solid', icon)} size='5x' />
      <strong>{header}</strong>
      <p>{text}</p>
    </div>
  );
};

export default SingleFeature;
