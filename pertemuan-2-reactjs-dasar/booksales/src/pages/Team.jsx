import React from 'react';

const teamMembers = [
  { id: 1, name: 'Muhammad', role: 'Founder & CEO', img: 'https://i.pravatar.cc/150?img=11' },
  { id: 2, name: 'Afif', role: 'Chief Marketing Officer', img: 'https://i.pravatar.cc/150?img=12' },
  { id: 3, name: 'Naufal', role: 'Lead Developer', img: 'https://i.pravatar.cc/150?img=68' },
];

function Team() {
  return (
    <div className="container py-5">
      <div className="row mb-4 text-center">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4 fw-bold">Tim Kami</h1>
          <p className="lead text-muted">Orang-orang hebat di balik BookSales yang berdedikasi untuk memberikan pengalaman terbaik untukmu.</p>
        </div>
      </div>

      <div className="row text-center gy-4">
        {teamMembers.map(member => (
          <div key={member.id} className="col-xl-4 col-sm-6">
            <div className="bg-white rounded shadow-sm py-5 px-4 h-100">
              <img src={member.img} alt={`Foto ${member.name}`} width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 className="mb-0">{member.name}</h5>
              <span className="small text-uppercase text-muted">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;