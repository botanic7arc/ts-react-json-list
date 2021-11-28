type JsonData = { testData: { name: string, kinds: string }[] };

export const makeListDivFromJson = (Data: JsonData): object[] => {
    let outDiv = [];
    let processedKinds: string[] = []//処理済み種類

    for (let i = 0; i < Data.testData.length; i++) {
        let processedKindsCompare = '';//比較用
        //処理済みの項目か確認
        if (!processedKinds.includes(Data.testData[i].kinds)) {
            processedKinds.push(Data.testData[i].kinds);
            processedKindsCompare = Data.testData[i].kinds
            outDiv.push(<h2>{Data.testData[i].kinds}</h2>);
            let listData = [];
            //種類に一致するデータを格納
            for (let j = 0; j < Data.testData.length; j++) {
                if (processedKindsCompare === Data.testData[j].kinds) {
                    listData.push(<li>{Data.testData[j].name}</li>);
                }
            }
            outDiv.push(<ul>{listData}</ul>);
        }
    }
    return outDiv;
}