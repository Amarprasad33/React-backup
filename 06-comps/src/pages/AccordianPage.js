// It is a backup of the App component of the Accordion page

import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 'l3hy45hjatu',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'
        },
        {
            id: 'eug579baf6iaf',
            label: 'Can I use Javascript on a project?',
            content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'
        },
        {
            id: 'aute021bvaljbre8hbre',
            label: 'Can I use CSS on a project?',
            content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'
        }
    ];
    
    return (
        <Accordion items={items} />
    );
}

export default AccordionPage;


