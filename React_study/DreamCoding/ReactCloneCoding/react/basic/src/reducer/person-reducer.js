function personReducer(person, action){
    switch(action.type) {
        case 'updated': {
            const {prev , current} = action;
            return {
                ...person,
                mentors : person.mentors.map((mentor)=>{
                    if(mentor.name === prev) {
                        return {...mentor, name : current};
                    }
                    return mentor;
                }
            }
        }
    }
}