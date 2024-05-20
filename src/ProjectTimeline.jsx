const ProjectTimeline = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg">
      <div className="mb-24 flex flex-col gap-6">
        <span className="bg-[#c340a04d] text-[#F178B6] py-2 px-3 text-sm rounded-md w-fit">
          Our Project
        </span>
        <h1 className="text-2xl font-bold">Project Timeline</h1>
        <p className="text-gray-600">A Comprehensive roadmap of Huddlee</p>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-l border-r p-4">Phase</th>
            <th className="border-l border-r p-4">Coming soon</th>
            <th className="border-l border-r p-4">Coming soon</th>
            <th className="border-l border-r p-4">Coming soon</th>
            <th className="border-l border-r p-4">Coming soon</th>
            <th className="border-l border-r p-4">Coming soon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-4">Phase 1</td>
            <td className="border p-4 bg-gray-100">MVP 1 Release</td>
            <td className="border p-4"></td>
            <td className="border p-4"></td>
            <td className="border p-4"></td>
            <td className="border p-4"></td>
          </tr>
          <tr>
            <td className="border p-4">Phase 2</td>
            <td className="border p-4"></td>
            <td className="border p-4 bg-gray-100">MVP 2 Release</td>
            <td className="border p-4"></td>
            <td className="border p-4"></td>
            <td className="border p-4"></td>
          </tr>
          <tr>
            <td className="border p-4">Phase 3</td>
            <td className="border p-4"></td>
            <td className="border p-4"></td>
            <td className="border p-4 bg-gray-100">Launch</td>
            <td className="border p-4"></td>
            <td className="border p-4"></td>
          </tr>
          <tr>
            <td className="border p-4">Phase 4</td>
            <td className="border p-4"></td>
            <td className="border p-4"></td>
            <td className="border p-4"></td>
            <td className="border p-4 bg-gray-100">
              Pre-launch Prototype Test
            </td>
            <td className="border p-4"></td>
          </tr>
          <tr>
            <td className="border p-4">Phase 4</td>
            <td className="border p-4"></td>
            <td className="border p-4"></td>
            <td className="border p-4"></td>
            <td className="border p-4"></td>
            <td className="border p-4 bg-gray-100">Beta Release</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTimeline;
