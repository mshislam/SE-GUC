import User from '../models/User';// hena el mafrood badawar 3al folder el ana 3amalto 3ashan a import user.js



const users=[
    new User('1',"Youssef","Zaki","Shalaby","23/09/1998","youshalaby@gmail.com","allezleblues",'01119455455',"Egypt","cairo","",true),
    new User('2',"Mesut","AMin","Ozil","23/09/1990","ozil@gmail.com","iamjd",'02222345455',"England","London","",false),
    new User('3',"Emily","Olivia","Blunt","23/02/1983","ms_blunt@gmail.com","holywood202",'9455667788',"USA","New Jersey","",false),
    new User('4',"Tessa","Lyn","Thompson","03/10/1983","lifeline@gmail.com","blackpanther",'0104840022',"USA","New York","",false)  
    ];
    //makammeltsh from here    
    const admin=[
        {id:'1'}
    ]
    const member=[
        {
            id:'2',
            years_of_experiece:'4',
            skills:["Programming","Editing","Design"],
            interests:["tech","computers","football"]
        
        },
        {
    
            id:'3',
            years_of_experiece:'7',
            skills:["English","Arabic","Chinese"],
            interests:["Translating","Cooking","Writing"]
        }
    
    ];
    
    const partner=[
        {
            id:'3',
            c_id:'1'
        }
    ];
    const consultancy_agency=[
        {
            c_id:'1',
            info:"Dell",
            field_of_work:"Technology",
            board_members:["musk","Marco"],
            reports:["google.docs/report_of_musk"]
    
    
        }
    ]
    const Task=[
        {
            id:'1', 
            time_of_post:"21/02/2019 8:15 PM",
            time_of_review:"",
            monetary_compensation:'5678',
            price:'20000',
            time_of_assingment:"",
            is_assigned:false,
            assigned_id:'',
            time_expected:"3 weeks",
            level_of_comitment:"High",
            is_reviewed: false,
            experience_needed:'3',
            description:"I need someone to Apply unit tests on my code",
            p_id:'4',
            skills:["Java","programming"],
            response_from_admin:"",
            admin_id:'1'
    
        },
        {
            id:'2',
            time_of_post:"21/02/2019 7:15 PM",
            time_of_review:"",
            monetary_compensation:'58',
            price:'200',
            time_of_assingment:"",
            is_assigned:false,
            assigned_id:'',
            time_expected:"3 days",
            level_of_comitment:"low",
            is_reviewed: false,
            experience_needed:'2',
            description:"Translation from Chinese to English Needed",
            p_id:'4',
            skills:["Chinese","English","Translation"],
            response_from_admin:"",
            admin_id:'1'
    
        }
    
    ];
    
    const event=[
        {
            id:'4',
            remaining_places:'12',
            organizer:"Mohammed Mahrous",
            location:"Mall of arabia hall 2, 6 october city, cairo, Egypt",
            about:"event that helps ict startups",
            price:'60',
            speakers:["Elon Musk","Hassan Soubra"],
            topics:["technology","Java","Programming"],
            attendees_ids:['1','2']
    
    
        }
    
    ]
    