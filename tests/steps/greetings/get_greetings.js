import { request } from '../../utils/requests.js'

export async function getGreetings() {
    it('Retrieve greeting', async function () {
        await request(this, 'GET', '/greeting', undefined, false, 
            {
                statusCode : 200,
                expectedFields: [
                    'greeting',
                ],
                expectedValues: [
                                    {path: 'greeting', value: 'Hello from Python App!'},
                                ]
            }
        )
    })
}