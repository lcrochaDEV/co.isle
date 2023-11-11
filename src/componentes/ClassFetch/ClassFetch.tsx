
class ConnectFetch {
    url: string;
    constructor(url: string){
        this.url = url;
    }
    async conectJsonUrlJson(){
        try { 
            const response = await fetch(this.url); 
            if(response.status === 200){
                const apiData = await response.json();
                return apiData;
            }else if (response.status === 404){
                console.log('Erro 404!')
            }
        } catch (error) {
            console.error('Erro:', error); 
        }
    } 
}
export default ConnectFetch;