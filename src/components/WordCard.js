import { Card } from 'react-bootstrap';

export const WorkCard = ({ title, company, website }) => {
  return (
    <Card className="work-card h-100 text-center shadow-sm border-0">
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted">{company}</Card.Text>
        <Card.Link href={website} target="_blank" className="text-decoration-none">
          {website}
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
