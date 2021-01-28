import {EventLog, EventLogRecord, Island, PageContainer} from "./index.styles";
import {FormattedMessage} from "react-intl";

const generate_data = () => {
    const now = new Date();
    let result = []
    for (let i = 0; i < 7; i++) {
        let currentDate = new Date(now);
        currentDate.setMinutes(currentDate.getMinutes() - 8 + i)
        result.push({
            date: currentDate,
            text: `Алгоритм выбрал: убить кабана. Успешно`
        })
    }
    return result;
}

function App() {
  return (
    <PageContainer>
        <Island>
            <h2><FormattedMessage id="eventLog.title"/></h2>
            <EventLog>
                {generate_data().map(elem=> (<EventLogRecord>{`${elem.date.toLocaleDateString('ru-RU')} ${elem.date.toLocaleTimeString('ru-RU')} : ${elem.text}`}</EventLogRecord>))}
            </EventLog>
        </Island>
    </PageContainer>
  );
}

export default App;
