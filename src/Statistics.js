import StatisticLine from "./StatisticLine"

const Statistics = ({good, bad, neutral}) => {

    const total = good+bad+neutral
    const average = (good-bad)/total
    const positive = good/total

    if(good != 0 || bad != 0 || neutral != 0) {
        return(
            <div>
                <StatisticLine text="good" value={good}></StatisticLine>
                <StatisticLine text="bad" value={bad}></StatisticLine>
                <StatisticLine text="neutral" value={neutral}></StatisticLine>
                <StatisticLine text="all" value={total}></StatisticLine>
                <StatisticLine text="average" value={average}></StatisticLine>
                <StatisticLine text="positive" value={positive}></StatisticLine>
            </div>   
        )
    }

    return (
        <div>No feedback given</div>
    )
}  

export default Statistics;