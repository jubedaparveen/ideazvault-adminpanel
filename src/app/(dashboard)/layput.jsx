import Adminpage from "./Admin/page";

export default function DashBoardLayout({ children }) {
    return (
        <>
            <div>
                <h2>Header</h2>
                <Adminpage/>
                {children}
            </div>
        </>
    );
}