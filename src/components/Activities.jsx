import '../styles/Activities.css';

function Activities() {
  return (
    <section className="activities" id="activities">
      <h2 className="activities-title">Extracurricular Activities</h2>

      <div className="activities-list">
        <div className="activity-card">
          <h3>Tatweer Program (Dec 2021)</h3>
          <p>
            Earned a certificate of participation after attending a series of workshops focused on identifying real-world problems, proposing solutions, and turning those solutions into profitable opportunities. This was my first introduction to the world of startups and innovation.
          </p>
        </div>

        <div className="activity-card">
          <h3>YouthTalks+ (Jan 2022)</h3>
          <p>
            A week-long journey of workshops centered around youth empowerment, inclusion, and advocacy. We explored community and societal issues like discrimination and inequality — and how to raise awareness and take initiative. Received a certificate of appreciation.
          </p>
        </div>

        <div className="activity-card">
          <h3>21st Century Skills Training (Mar 2023)</h3>
          <p>
            Completed a training program focused on essential soft skills for modern professionals: communication, adaptability, problem-solving, digital literacy, and teamwork. Earned a certificate of completion.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Activities;
