declare enum JuniorDomain {
    Web = 'Web',
    Connect = 'Connect',
    Backend = 'Backend',
  }
  
  
  interface Intern {
    name: string;
    age: number;
    skills: string[];
  }
  
  interface Junior {
    name: string;
    age: number;
    skills: string[];
    date_of_promotion: string;
    domain: JuniorDomain;
  }

  interface Company {
    interns: Intern[];
    juniors: Junior[];
    Country: string;
  }
  
  
//   const interns: Intern[] = [
//     {
//       name: 'Blendi',
//       age: 19,
//       skills: ['HTML', 'CSS'],
//     },
//     {
//       name: 'Blendi',
//       age: 20,
//       skills: ['JavaScript', 'Python'],
//     },
//   ];
  
//   const juniors: Junior[] = [
//     {
//       name: 'Blendi',
//       age: 23,
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       date_of_promotion: '2023-06-15',
//       domain: JuniorDomain.Web,
//     },
//     {
//       name: 'Blendi',
//       age: 24,
//       skills: ['Python', 'SQL'],
//       date_of_promotion: '2023-07-02',
//       domain: JuniorDomain.Backend,
//     },
//     {
//       name: 'Blendi',
//       age: 22,
//       skills: ['Communication', 'Problem Solving'],
//       date_of_promotion: '2023-05-20',
//       domain: JuniorDomain.Connect,
//     },
//   ];
  
//   const company: Company = {
//     interns: interns,
//     juniors: juniors,
//     Country: 'United States',
//   };
  
  export default Company;