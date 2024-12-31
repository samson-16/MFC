import React from "react";

const teamMembers = [
  { name: "Mesud Ahmed", department: "Software", id: "ETS1054/14" },
  { name: "Samson Demessie", department: "Software", id: "ETS1410/14" },
  { name: "Beza Yakob", department: "Electrical and Computer", id: "ETS0331/14" },
  { name: "Tedros Haymanot", department: "Electrical and Computer", id: "ETS1527/14" },
  { name: "Abigail Mekonnen", department: "Electromechanical", id: "ETS0085/14" },
  { name: "Sisay Aziz", department: "Electromechanical", id: "ETS1485/14" },
  { name: "Aymen Abdulkerim", department: "Architecture", id: "ETS0235/14" },
  { name: "Dagmawit Aschenaki", department: "Civil", id: "ETS0434/14" },
  { name: "Hiyawzuer Markose", department: "Mechanical", id: "ETS0581/14" },
  { name: "Nathaniel Asheber", department: "Chemical", id: "ETS1213/14" },
];

const Team = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-700">Meet Our Team</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          We are a multidisciplinary team of innovators committed to advancing clean energy solutions.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={`https://via.placeholder.com/150?text=${member.name.split(" ")[0]}`}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.department}</p>
            <p className="text-xs text-gray-400">{member.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
