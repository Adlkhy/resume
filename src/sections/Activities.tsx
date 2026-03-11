interface Activity {
  role: string;
  affiliation: string;
  dates: string;
}

const activities: Activity[] = [
  {
    role: 'Campus Associate',
    affiliation: 'Anthropic, Claude Builder Club @ McGill University',
    dates: 'Jan 2026 – Present',
  },
  {
    role: 'Director of Prayer',
    affiliation: 'Muslim Student Association of McGill University',
    dates: 'Sept 2025 – Present',
  },
  {
    role: 'President',
    affiliation: 'Best Buddies Canada, Dawson College Branch',
    dates: 'Aug 2023 – May 2024',
  },
  {
    role: 'Volunteer Tutor (Math, Physics, Chemistry)',
    affiliation: 'Dawson College',
    dates: 'Dec 2023 – May 2024',
  },
  {
    role: 'Vice-President (Formerly Secretary, Social Media Manager)',
    affiliation: 'Muslim Student Association of Dawson College',
    dates: 'Sep 2022 – Jan 2024',
  },
];

const Activities = () => {
  return (
    <section id="activities" className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8 animate-fade-in-up">
          Activities
        </h2>

        <div className="overflow-x-auto animate-fade-in-up animation-delay-100">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Role
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Affiliation
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                  Dates of Service
                </th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr
                  key={index}
                  className="border-b border-border hover:bg-background/50 transition-colors"
                >
                  <td className="py-4 px-4 text-sm text-foreground">
                    {activity.role}
                  </td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">
                    {activity.affiliation}
                  </td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">
                    {activity.dates}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Activities;
