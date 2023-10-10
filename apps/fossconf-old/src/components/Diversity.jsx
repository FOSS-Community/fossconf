import React from 'react';

function DiversityPage() {
  return (
    <div className="bg-black text-white font-sans">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-center">Diversity</h1>

        <div className="my-8">
          <h2 className="text-2xl font-semibold">Diversity Statement</h2>
          <p className="mt-4 text-lg leading-relaxed">
            Fosscu community welcomes and encourages participation by everyone. We embrace diversity as a fundamental cornerstone of our identity. Our commitment to diversity is not just a statement; it's a driving force behind our mission. We believe that diverse teams foster innovation, creativity, and understanding, enabling us to better serve our communities. We want our community to be more diverse: whoever you are, and whatever your background, we welcome you.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-semibold">Diversity Appendix</h2>
          <p className="mt-4 text-lg leading-relaxed">
            We envision a future where diversity is celebrated, equity is achieved, and inclusion is the norm. We know that achieving this vision requires ongoing effort, and we are dedicated to taking meaningful steps toward this goal. We believe that a diverse community is stronger and more vibrant. A diverse community where people treat each other with respect has more potential contributors and more sources for ideas. We are committed to continuous improvement, regularly reviewing our practices and policies to ensure they align with our diversity and inclusion goals. It is imperative to us that everyone in the community that wants to participate feels welcome to do so regardless of gender, gender identity, sexual orientation, dis/ability, ethnicity, age, religion, or economic status.
          </p>
        </div>

        <p className="mt-4 text-lg leading-relaxed">To encourage and increase the participation of a diverse community, we are pleased to offer <a className="text-blue-400 hover:underline" href="#">diversity scholarships</a> and dedicated support.</p>
      </div>
    </div>
  );
}

export default DiversityPage;
