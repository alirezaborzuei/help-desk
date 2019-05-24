export const costumers = [
    {
        id:1,
        fullName:'نیما کمالی',
        city:1,
        status:true
    },
    {
        id:2,
        fullName:'سجاد رضایی',
        city:2,
        status:true
    },
    {
        id:3,
        fullName:'شهریار فدایی',
        city:4,
        status:false
    },
    {
        id:4,
        fullName:'رحیم قندی',
        city:3,
        status:true
    },
    {
        id:5,
        fullName:'شاهرخ سلامت',
        city:5,
        status:false
    },
];

class App extends React.Component {
    state = {
       id : '',
       fullName : '',
       city : [],
    };
    handleSubmit = () => {
        const {fullName,city,id} = this.state;
        const user = Custumers.find((item) => item.id === code);
        if(user){
            const reportObject = {
                code,
                fullName,
                city,
                
            };
            reports.push(reportObject);
            this.setState(() => ({reports}));
            alert('DOne');
        } else{
            alert('User not found!');
        }

    };

export default Custumers;

