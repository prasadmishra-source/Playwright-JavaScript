import { test, expect } from '@playwright/test'


test.beforeAll(async()=> {

    console.log('this is beforeAll hook ....')
})

test.afterAll(async()=> {
    console.log('this is afterAll Hook ......')
})

test.beforeEach(async() =>{

    console.log('this is beforeEach hook .....')
})

test.afterEach(async() => {

    console.log('this is afterEach hooks .......')
})




test.describe('Group1', () =>{

    test('Test1', async({ page }) => {

    console.log('This is test 1')
    })

    test('Test2', async({ page }) => {

    console.log('This is test 2')
    })

})

test.describe('Group2', () =>{

    test('Test3', async({ page }) => {

    console.log('This is test 3')
    })

    test('Test4', async({ page }) => {

    console.log('This is test 4')
    })


})


