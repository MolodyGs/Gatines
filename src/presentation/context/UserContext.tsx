import { Task } from '../../interfaces/Task.tsx';
import { createContext } from 'react';

type UserContextType = {
    tasks: Task[];
    settasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const UserContext = createContext<UserContextType | null>(null);
export default UserContext;