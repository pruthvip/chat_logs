// create an express app
const express = require("express")
const app = express()
const path = require('path');
const bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'build')));


// parse application/json
app.use(bodyParser.json())

// use the express-static middleware
app.use(express.static("public"))

app.get('/json/messages', async (req, res) => {
    res.send([
        {
            "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
            "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
            "timestamp": "2017-02-09T04:27:38Z"
        },
        {
            "id": "b03569ae-ccbf-4975-8040-4daba638b407",
            "userId": "16373df5-da0a-4074-8295-f916b94269f4",
            "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
            "timestamp": "2016-11-09T05:04:58Z"
        },
        {
            "id": "3a59859e-33f1-4c2b-a636-1f119c484dc8",
            "userId": "976c4919-a8b4-4807-bebb-84ca8448be32",
            "message": "Suspendisse potenti.",
            "timestamp": "2016-06-03T20:24:29Z"
        },
        {
            "id": "c7252640-af98-442a-9dcd-ddc5e789238a",
            "userId": "d18b107b-6874-49bd-94c0-4d830fc7eaed",
            "message": "Nunc purus.",
            "timestamp": "2016-04-07T10:20:42Z"
        },
        {
            "id": "22a454b1-6659-400f-aa77-eaae34a77118",
            "userId": "205c9b7a-345d-4aa2-9e4c-56f05f72bbe8",
            "message": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
            "timestamp": "2016-04-14T16:53:55Z"
        },
        {
            "id": "74b1b9bd-0f85-49f0-9ef2-354354049de5",
            "userId": "3d90a981-a609-412d-9c63-f6e202a928c0",
            "message": "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
            "timestamp": "2016-10-22T23:05:44Z"
        },
        {
            "id": "e1a540f8-fcde-4217-a18d-3cd8280c504a",
            "userId": "77ad1a54-6433-4078-ac49-8caa6f5a786a",
            "message": "Nunc purus.",
            "timestamp": "2016-10-28T03:26:37Z"
        },
        {
            "id": "89fc0aa7-9a19-42fd-8fec-e3b396c314ad",
            "userId": "fb587e3a-c189-4f29-b847-6b063bae0d0e",
            "message": "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
            "timestamp": "2016-03-22T09:52:34Z"
        },
        {
            "id": "7ee2784d-526f-4d08-af6d-4624b33811c2",
            "userId": "997fd037-2ab6-4490-aedf-263b7cd7ece3",
            "message": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
            "timestamp": "2016-03-19T04:36:05Z"
        },
        {
            "id": "f8fa50aa-df49-48c5-8775-74fe6cc23152",
            "userId": "7d4b8f6d-dcc1-4439-9571-e68022f7dafe",
            "message": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
            "timestamp": "2016-12-23T03:27:11Z"
        },
        {
            "id": "18a18a75-dad6-472c-a446-b5328503ef7b",
            "userId": "3ccb5cd1-bfc4-4c9d-92ac-f9e88882c269",
            "message": "Nam nulla.",
            "timestamp": "2016-06-23T02:01:28Z"
        },
        {
            "id": "f75319c8-4da9-43cc-85bd-3ff128cb47cc",
            "userId": "3ccb5cd1-bfc4-4c9d-92ac-f9e88882c269",
            "message": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
            "timestamp": "2017-01-03T04:08:58Z"
        },
        {
            "id": "640624ae-ab85-4c93-b7f9-741bb9c4e349",
            "userId": "65bc5c87-911b-4a50-bf2c-38aca58680af",
            "message": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
            "timestamp": "2016-09-18T22:22:26Z"
        },
        {
            "id": "d6682ada-189c-45b0-90a6-0287bd5f9989",
            "userId": "3ccb5cd1-bfc4-4c9d-92ac-f9e88882c269",
            "message": "Integer non velit.",
            "timestamp": "2016-11-01T06:32:32Z"
        },
        {
            "id": "5995941f-6fc2-430a-a968-bf4e4c418bd1",
            "userId": "d6b9f683-84fe-4296-b55b-40ee0a77d54c",
            "message": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "timestamp": "2016-09-02T06:14:24Z"
        },
        {
            "id": "0bbbeba2-cd49-4778-98bb-6f9bef340747",
            "userId": "65bc5c87-911b-4a50-bf2c-38aca58680af",
            "message": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
            "timestamp": "2016-11-04T02:59:32Z"
        },
        {
            "id": "96c376d2-1433-4690-b1d8-bd27717c66e6",
            "userId": "ba645991-1ab6-491c-8f09-9fe179e1645f",
            "message": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
            "timestamp": "2016-09-27T16:08:30Z"
        },
        {
            "id": "eee3fbec-dd03-4e96-a4b1-a0278ad230b1",
            "userId": "2984bb94-d4ad-4f51-8885-757e42b19fc9",
            "message": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "timestamp": "2016-10-23T21:55:50Z"
        },
        {
            "id": "54e98406-d69f-42c8-adb5-c523dd0c4218",
            "userId": "73f30d93-f87b-45ea-bda5-60fa4b3716b5",
            "message": "Mauris lacinia sapien quis libero.",
            "timestamp": "2017-02-27T13:47:25Z"
        },
        {
            "id": "81ac3b2e-28f8-42cd-aae2-714f3c382c44",
            "userId": "77ad1a54-6433-4078-ac49-8caa6f5a786a",
            "message": "In hac habitasse platea dictumst.",
            "timestamp": "2017-02-01T10:41:04Z"
        },
        {
            "id": "76ac63c1-fbb1-4a80-9442-420cb69fa196",
            "userId": "c980934a-f54e-459e-8137-0ec3654cdafb",
            "message": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "timestamp": "2016-12-07T05:02:09Z"
        },
        {
            "id": "1357a8ca-e956-455f-9929-07911e8d672a",
            "userId": "d6b9f683-84fe-4296-b55b-40ee0a77d54c",
            "message": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
            "timestamp": "2016-04-06T15:46:58Z"
        },
        {
            "id": "c957c95d-3145-409f-ac23-16092974260a",
            "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            "message": "Nullam varius. Nulla facilisi.",
            "timestamp": "2016-08-30T11:09:51Z"
        },
        {
            "id": "518b581f-3503-4ffc-865d-bedd9ca44e52",
            "userId": "d6b9f683-84fe-4296-b55b-40ee0a77d54c",
            "message": "Proin eu mi. Nulla ac enim.",
            "timestamp": "2016-11-24T15:49:20Z"
        },
        {
            "id": "8b56d447-8563-4206-8979-a54e5c9d5a01",
            "userId": "a76b0f52-1faa-4821-b25f-7159cc293451",
            "message": "Aenean lectus.",
            "timestamp": "2016-11-12T02:55:37Z"
        },
        {
            "id": "a53c123e-6096-4dbd-88c5-32bb2acd6c91",
            "userId": "ca7fe54f-c348-4d5f-a2ff-2462e82b9377",
            "message": "In eleifend quam a odio.",
            "timestamp": "2016-08-07T08:12:44Z"
        },
        {
            "id": "539eb51a-ba5d-4947-9c63-29724f427126",
            "userId": "fb587e3a-c189-4f29-b847-6b063bae0d0e",
            "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
            "timestamp": "2016-10-16T18:18:26Z"
        },
        {
            "id": "1d4bbb95-1b6b-4b68-a432-d3e0d3ab0c6c",
            "userId": "21f4beef-251c-4a9e-aace-20e68abb27e8",
            "message": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
            "timestamp": "2016-08-11T13:32:45Z"
        },
        {
            "id": "3db3dde5-c25e-40ec-a4b2-5788ac095e26",
            "userId": "accc20d4-ce4c-451b-8548-e1a5ce1ce623",
            "message": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
            "timestamp": "2016-12-15T11:29:31Z"
        },
        {
            "id": "18319136-7813-499b-be82-ce9becd54937",
            "userId": "0d9496c4-2490-40e6-a0c3-0964e371f1ab",
            "message": "Maecenas rhoncus aliquam lacus.",
            "timestamp": "2016-11-14T21:41:53Z"
        },
        {
            "id": "e43143cb-afe2-4e4d-80f5-e7b04b3d44c0",
            "userId": "7d4b8f6d-dcc1-4439-9571-e68022f7dafe",
            "message": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
            "timestamp": "2016-04-02T15:58:08Z"
        },
        {
            "id": "cf4ea07e-f6b9-4fae-b01b-70c4aa035f93",
            "userId": "77ad1a54-6433-4078-ac49-8caa6f5a786a",
            "message": "Nullam molestie nibh in lectus. Pellentesque at nulla.",
            "timestamp": "2016-03-17T16:12:13Z"
        },
        {
            "id": "70911c64-14c9-4c64-a742-ec0c0e507feb",
            "userId": "3da46271-e3fa-4317-ac29-81ece07ce6c0",
            "message": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "timestamp": "2016-05-04T13:55:52Z"
        },
        {
            "id": "d3ae420e-0e93-44e6-adaa-2a1b07fae232",
            "userId": "fb587e3a-c189-4f29-b847-6b063bae0d0e",
            "message": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
            "timestamp": "2016-03-02T00:10:08Z"
        },
        {
            "id": "35e8908c-4b3e-4408-bf34-a93a99fd2f40",
            "userId": "898fc6d4-5706-44d2-b1f3-eb8908e8a3c3",
            "message": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
            "timestamp": "2017-01-12T17:45:34Z"
        },
        {
            "id": "19bc21d3-5057-472f-a675-2e2d246d3998",
            "userId": "997fd037-2ab6-4490-aedf-263b7cd7ece3",
            "message": "Proin at turpis a pede posuere nonummy. Integer non velit.",
            "timestamp": "2016-09-05T17:23:02Z"
        },
        {
            "id": "fa618c72-4154-4075-95bc-0016d62f3a0d",
            "userId": "53153c91-9365-4b8f-b6ca-374c13ca57bc",
            "message": "Morbi porttitor lorem id ligula.",
            "timestamp": "2017-01-15T07:26:50Z"
        },
        {
            "id": "744a6aed-7752-4e13-9eba-a7030e4db4c6",
            "userId": "898fc6d4-5706-44d2-b1f3-eb8908e8a3c3",
            "message": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
            "timestamp": "2016-06-26T21:21:05Z"
        },
        {
            "id": "a834b3a0-772c-44ba-9edc-5afbadbf0906",
            "userId": "3ccb5cd1-bfc4-4c9d-92ac-f9e88882c269",
            "message": "Nulla tellus.",
            "timestamp": "2016-08-19T07:05:14Z"
        },
        {
            "id": "00d6879c-f3dd-41f2-b1f6-f691ac9a1a9e",
            "userId": "ca7fe54f-c348-4d5f-a2ff-2462e82b9377",
            "message": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
            "timestamp": "2016-08-28T09:33:56Z"
        },
        {
            "id": "fbfecc44-bb23-43ee-9227-abb774bdfa84",
            "userId": "ca7fe54f-c348-4d5f-a2ff-2462e82b9377",
            "message": "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
            "timestamp": "2016-05-16T03:32:41Z"
        },
        {
            "id": "ab791424-39a6-410e-8082-c096c673c645",
            "userId": "ba645991-1ab6-491c-8f09-9fe179e1645f",
            "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
            "timestamp": "2016-08-10T14:18:39Z"
        },
        {
            "id": "0314a50e-6715-41d5-8634-06ec0195e821",
            "userId": "3ccb5cd1-bfc4-4c9d-92ac-f9e88882c269",
            "message": "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "timestamp": "2016-05-27T11:36:55Z"
        },
        {
            "id": "c762f111-ee15-4120-b88e-898b7d6bfbf6",
            "userId": "accc20d4-ce4c-451b-8548-e1a5ce1ce623",
            "message": "Pellentesque at nulla.",
            "timestamp": "2016-11-16T12:53:15Z"
        },
        {
            "id": "c211f248-57c3-4432-a925-42f90f609a11",
            "userId": "a5d8536d-06e1-47a7-9c65-3d3ac0d993b5",
            "message": "In eleifend quam a odio. In hac habitasse platea dictumst.",
            "timestamp": "2016-11-14T16:51:22Z"
        },
        {
            "id": "fa0ca158-42ae-435d-8c32-13f4cb7b8de8",
            "userId": "73f30d93-f87b-45ea-bda5-60fa4b3716b5",
            "message": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
            "timestamp": "2016-02-24T00:01:28Z"
        },
        {
            "id": "6032e855-eec7-4403-a5af-fe62dd2361d3",
            "userId": "accc20d4-ce4c-451b-8548-e1a5ce1ce623",
            "message": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
            "timestamp": "2016-03-14T09:32:47Z"
        },
        {
            "id": "05fd852f-9219-4203-990f-7be51992b7b4",
            "userId": "accc20d4-ce4c-451b-8548-e1a5ce1ce623",
            "message": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
            "timestamp": "2016-09-22T17:47:21Z"
        },
        {
            "id": "79a48727-0e75-49c0-843f-ef80a2bd4f11",
            "userId": "0d9496c4-2490-40e6-a0c3-0964e371f1ab",
            "message": "Vestibulum rutrum rutrum neque.",
            "timestamp": "2016-09-13T15:19:07Z"
        },
        {
            "id": "22a887be-78dc-45bf-8997-b712d3de4510",
            "userId": "e837c9f5-247f-445f-bcc3-7d434348336b",
            "message": "Cras in purus eu magna vulputate luctus.",
            "timestamp": "2017-01-26T07:53:12Z"
        },
        {
            "id": "b747e3c3-a67a-4d5a-9dd2-848e1701507b",
            "userId": "ba645991-1ab6-491c-8f09-9fe179e1645f",
            "message": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
            "timestamp": "2016-11-23T11:45:08Z"
        },
        {
            "id": "62885238-50d0-42f4-9333-08f6b730ef25",
            "userId": "d18b107b-6874-49bd-94c0-4d830fc7eaed",
            "message": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "timestamp": "2016-10-03T20:15:39Z"
        },
        {
            "id": "33881ebe-222a-4178-bd8d-39a83644670b",
            "userId": "accc20d4-ce4c-451b-8548-e1a5ce1ce623",
            "message": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
            "timestamp": "2016-09-30T12:23:23Z"
        },
        {
            "id": "cb4b650e-e6ca-4364-9396-c50f4b5ac135",
            "userId": "ca7fe54f-c348-4d5f-a2ff-2462e82b9377",
            "message": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
            "timestamp": "2016-09-06T14:55:22Z"
        },
        {
            "id": "35594652-8c94-404d-bba4-831caff2e5c9",
            "userId": "898fc6d4-5706-44d2-b1f3-eb8908e8a3c3",
            "message": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
            "timestamp": "2016-03-04T10:14:19Z"
        },
        {
            "id": "a88e530e-fc4c-46b0-8977-c12c33e1e668",
            "userId": "16373df5-da0a-4074-8295-f916b94269f4",
            "message": "Aliquam non mauris.",
            "timestamp": "2016-10-28T03:13:47Z"
        },
        {
            "id": "6a7017bd-f504-437b-a155-e3ec5109edda",
            "userId": "898fc6d4-5706-44d2-b1f3-eb8908e8a3c3",
            "message": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
            "timestamp": "2016-09-16T12:54:29Z"
        },
        {
            "id": "b0bbcee1-230a-45f9-8d6c-acc11b6380e4",
            "userId": "d6b9f683-84fe-4296-b55b-40ee0a77d54c",
            "message": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
            "timestamp": "2016-05-24T02:09:07Z"
        },
        {
            "id": "a3690919-08d4-4bb1-9e7a-9644d8196ea3",
            "userId": "3d90a981-a609-412d-9c63-f6e202a928c0",
            "message": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
            "timestamp": "2016-10-30T02:59:55Z"
        },
        {
            "id": "fa710b52-b68f-49e3-a236-3bdd89f78dba",
            "userId": "ba645991-1ab6-491c-8f09-9fe179e1645f",
            "message": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "timestamp": "2016-10-19T01:00:26Z"
        },
        {
            "id": "683078d5-0278-4077-b1c1-98498f84f928",
            "userId": "3da46271-e3fa-4317-ac29-81ece07ce6c0",
            "message": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
            "timestamp": "2016-08-19T08:43:19Z"
        },
        {
            "id": "0472536f-0bce-4162-abdf-f63fdf734af4",
            "userId": "c980934a-f54e-459e-8137-0ec3654cdafb",
            "message": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
            "timestamp": "2016-09-05T04:34:29Z"
        },
        {
            "id": "ae377113-2963-4b34-9ea4-d15e24518ee9",
            "userId": "c980934a-f54e-459e-8137-0ec3654cdafb",
            "message": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
            "timestamp": "2016-12-06T07:24:24Z"
        },
        {
            "id": "3347bc5d-22cb-4fc0-8150-3d71ac5be646",
            "userId": "976c4919-a8b4-4807-bebb-84ca8448be32",
            "message": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
            "timestamp": "2017-02-01T18:52:10Z"
        },
        {
            "id": "68918d55-f4ca-4960-b23e-b4c10f837167",
            "userId": "accc20d4-ce4c-451b-8548-e1a5ce1ce623",
            "message": "In congue. Etiam justo.",
            "timestamp": "2016-11-24T21:53:05Z"
        },
        {
            "id": "fe1e6aa3-3970-4d66-8bad-a00db85b6775",
            "userId": "7d4b8f6d-dcc1-4439-9571-e68022f7dafe",
            "message": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
            "timestamp": "2017-02-11T01:06:40Z"
        },
        {
            "id": "ce85b606-4291-4177-8947-fe6faabf2d53",
            "userId": "205c9b7a-345d-4aa2-9e4c-56f05f72bbe8",
            "message": "Phasellus in felis. Donec semper sapien a libero.",
            "timestamp": "2016-07-12T13:55:27Z"
        },
        {
            "id": "9c923d4b-3de7-49e5-ba24-710996cf1112",
            "userId": "898fc6d4-5706-44d2-b1f3-eb8908e8a3c3",
            "message": "Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "timestamp": "2016-03-15T20:24:57Z"
        },
        {
            "id": "d1f65e19-76f4-4a99-9b5a-c5ab4e0b981c",
            "userId": "77ad1a54-6433-4078-ac49-8caa6f5a786a",
            "message": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "timestamp": "2016-09-11T21:18:00Z"
        },
        {
            "id": "f4c95d46-02f5-4ef7-ad51-d11a49498149",
            "userId": "25bc59fd-1832-4eb4-964b-ff319e763494",
            "message": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
            "timestamp": "2016-12-06T05:07:46Z"
        },
        {
            "id": "75ebf4b8-a63b-48d3-b348-b67e6e898b55",
            "userId": "0bdd3633-d683-432d-add1-4c0d4f841ec3",
            "message": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
            "timestamp": "2016-03-17T16:30:19Z"
        },
        {
            "id": "555f4e1b-90a6-4079-850d-54001f29ce44",
            "userId": "c980934a-f54e-459e-8137-0ec3654cdafb",
            "message": "Quisque ut erat. Curabitur gravida nisi at nibh.",
            "timestamp": "2016-02-26T10:05:17Z"
        },
        {
            "id": "6750eee3-35ac-41af-a0a1-7788e753fbf9",
            "userId": "e837c9f5-247f-445f-bcc3-7d434348336b",
            "message": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
            "timestamp": "2016-03-25T23:01:20Z"
        },
        {
            "id": "b66fc1c2-8afc-4122-b3c1-550c8d46149e",
            "userId": "898fc6d4-5706-44d2-b1f3-eb8908e8a3c3",
            "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            "timestamp": "2016-04-20T14:33:39Z"
        },
        {
            "id": "45eca532-2d63-4519-9fe9-5aa3b81d919a",
            "userId": "cae5d3af-9ac7-471e-9061-e2e9d75f00e4",
            "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
            "timestamp": "2016-10-04T05:22:32Z"
        },
        {
            "id": "7cf2cc7a-dd51-48ad-a81c-db349218ca56",
            "userId": "77ad1a54-6433-4078-ac49-8caa6f5a786a",
            "message": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
            "timestamp": "2016-10-11T09:52:23Z"
        },
        {
            "id": "0d2ab9c7-f2cb-420a-80da-06686b91e8e2",
            "userId": "ba645991-1ab6-491c-8f09-9fe179e1645f",
            "message": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
            "timestamp": "2016-06-02T05:19:55Z"
        },
        {
            "id": "e8e63978-2e3d-4fe0-b64f-75c8537c0b83",
            "userId": "77ad1a54-6433-4078-ac49-8caa6f5a786a",
            "message": "Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "timestamp": "2016-05-24T12:27:48Z"
        },
        {
            "id": "492a09e9-c764-4322-a22c-c58a582c3a7a",
            "userId": "b46cf9e7-9757-4cb9-a9a3-e842bd3af1ba",
            "message": "In congue. Etiam justo. Etiam pretium iaculis justo.",
            "timestamp": "2016-03-13T03:21:52Z"
        },
        {
            "id": "0d8538d0-2c78-4ca7-93f3-a284ef6a2cac",
            "userId": "0080f744-e793-4b5e-97ee-8e8413b6d452",
            "message": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
            "timestamp": "2016-06-03T21:16:05Z"
        },
        {
            "id": "313ea059-55cd-42fd-a805-0efff72d75b6",
            "userId": "3da46271-e3fa-4317-ac29-81ece07ce6c0",
            "message": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
            "timestamp": "2016-08-13T21:44:14Z"
        },
        {
            "id": "185b63ce-fe1e-45a8-bcbd-b9857fd817d9",
            "userId": "65bc5c87-911b-4a50-bf2c-38aca58680af",
            "message": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
            "timestamp": "2016-06-07T15:04:32Z"
        },
        {
            "id": "b805b99b-67ee-4bf0-8650-86c30ce8a0fb",
            "userId": "65bc5c87-911b-4a50-bf2c-38aca58680af",
            "message": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
            "timestamp": "2016-08-19T02:51:39Z"
        },
        {
            "id": "3bb2fe9a-fd04-44ae-a183-95bc356d1be3",
            "userId": "73f30d93-f87b-45ea-bda5-60fa4b3716b5",
            "message": "Aliquam non mauris. Morbi non lectus.",
            "timestamp": "2016-06-05T22:13:40Z"
        },
        {
            "id": "9199cc5d-1dd8-4e70-9221-44b19c26f6c8",
            "userId": "21f4beef-251c-4a9e-aace-20e68abb27e8",
            "message": "Cras non velit nec nisi vulputate nonummy.",
            "timestamp": "2016-09-08T07:48:36Z"
        },
        {
            "id": "c4e9dc15-8051-4e30-832f-3dc588aada74",
            "userId": "0d9496c4-2490-40e6-a0c3-0964e371f1ab",
            "message": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            "timestamp": "2016-03-01T17:58:25Z"
        },
        {
            "id": "0b971ce3-85de-42a1-8b36-6d5ffd6df57c",
            "userId": "2984bb94-d4ad-4f51-8885-757e42b19fc9",
            "message": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
            "timestamp": "2016-09-15T09:28:18Z"
        },
        {
            "id": "05a309c1-8683-4791-96f8-320e99942213",
            "userId": "d6b9f683-84fe-4296-b55b-40ee0a77d54c",
            "message": "In blandit ultrices enim.",
            "timestamp": "2016-08-18T14:46:45Z"
        },
        {
            "id": "1469e146-075f-46d2-888b-8d3152da1be9",
            "userId": "cff77726-363e-4ba6-a953-4dc431cdd383",
            "message": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
            "timestamp": "2016-08-21T02:55:32Z"
        },
        {
            "id": "fa94a88c-35bb-4a22-baa8-19910a883a6b",
            "userId": "25bc59fd-1832-4eb4-964b-ff319e763494",
            "message": "Nunc rhoncus dui vel sem.",
            "timestamp": "2016-09-09T05:04:05Z"
        },
        {
            "id": "91fdcdbc-88f7-411c-b7e0-b297fd91ff5e",
            "userId": "53153c91-9365-4b8f-b6ca-374c13ca57bc",
            "message": "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
            "timestamp": "2016-09-06T01:09:23Z"
        },
        {
            "id": "4afe3bfe-4e21-406b-be66-b639c11eaaa1",
            "userId": "3d90a981-a609-412d-9c63-f6e202a928c0",
            "message": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
            "timestamp": "2016-12-17T13:52:25Z"
        },
        {
            "id": "6fdb7804-ce6b-4062-b13d-253d3dde8048",
            "userId": "2984bb94-d4ad-4f51-8885-757e42b19fc9",
            "message": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
            "timestamp": "2016-05-09T07:36:46Z"
        },
        {
            "id": "d4d5992d-ddcd-44fa-8b30-58cc3ace2f55",
            "userId": "ba645991-1ab6-491c-8f09-9fe179e1645f",
            "message": "Donec dapibus. Duis at velit eu est congue elementum.",
            "timestamp": "2016-12-18T00:43:13Z"
        },
        {
            "id": "8fe34649-702c-4e6b-8129-fa12d8341e91",
            "userId": "0080f744-e793-4b5e-97ee-8e8413b6d452",
            "message": "Cras non velit nec nisi vulputate nonummy.",
            "timestamp": "2016-03-08T20:11:54Z"
        },
        {
            "id": "cbc1dc3f-9e44-49f3-b6f6-3ced954b1d89",
            "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            "message": "Donec dapibus. Duis at velit eu est congue elementum.",
            "timestamp": "2016-08-01T07:02:23Z"
        },
        {
            "id": "945da807-f6b9-4aa8-8baf-156c9061e00a",
            "userId": "898fc6d4-5706-44d2-b1f3-eb8908e8a3c3",
            "message": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
            "timestamp": "2016-09-16T07:50:43Z"
        },
        {
            "id": "c8212810-eb89-4f19-ae77-6f844a7cb98a",
            "userId": "0d9496c4-2490-40e6-a0c3-0964e371f1ab",
            "message": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
            "timestamp": "2016-11-02T00:09:49Z"
        },
        {
            "id": "e2a7b937-e7cc-4965-8ac5-9da7da23da35",
            "userId": "898fc6d4-5706-44d2-b1f3-eb8908e8a3c3",
            "message": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
            "timestamp": "2016-03-19T20:12:15Z"
        },
        {
            "id": "bd9d6bc9-5231-44de-aadc-a4a0ab6eba7c",
            "userId": "d18b107b-6874-49bd-94c0-4d830fc7eaed",
            "message": "Donec ut mauris eget massa tempor convallis.",
            "timestamp": "2016-04-14T08:26:37Z"
        }
    ]);
});

app.get('/json/members', async (req, res) => {
    res.send([
        {
            "id": "e837c9f5-247f-445f-bcc3-7d434348336b",
            "firstName": "Martin",
            "lastName": "Bradley",
            "email": "mbradley0@google.it",
            "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
            "ip": "166.124.172.160"
        },
        {
            "id": "cae5d3af-9ac7-471e-9061-e2e9d75f00e4",
            "firstName": "Helen",
            "lastName": "Hawkins",
            "email": "hhawkins1@posterous.com",
            "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
            "ip": "179.239.189.173"
        },
        {
            "id": "ba5ebb2f-2dbd-44d4-911b-f15c2d792871",
            "firstName": "Denise",
            "lastName": "Sanders",
            "email": "dsanders2@ox.ac.uk",
            "avatar": "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
            "ip": "184.19.42.78"
        },
        {
            "id": "a76b0f52-1faa-4821-b25f-7159cc293451",
            "firstName": "Joan",
            "lastName": "Payne",
            "email": "jpayne3@youtube.com",
            "avatar": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
            "ip": "111.54.234.198"
        },
        {
            "id": "d18b107b-6874-49bd-94c0-4d830fc7eaed",
            "firstName": "Marilyn",
            "lastName": "Andrews",
            "email": "mandrews4@google.it",
            "avatar": "http://dummyimage.com/100x100.png/ff4444/ffffff",
            "ip": "102.50.7.81"
        },
        {
            "id": "21f4beef-251c-4a9e-aace-20e68abb27e8",
            "firstName": "James",
            "lastName": "Rogers",
            "email": "jrogers5@chron.com",
            "avatar": "http://dummyimage.com/100x100.jpg/cc0000/ffffff",
            "ip": "138.157.70.61"
        },
        {
            "id": "cff77726-363e-4ba6-a953-4dc431cdd383",
            "firstName": "Ralph",
            "lastName": "Nguyen",
            "email": "rnguyen6@odnoklassniki.ru",
            "avatar": "http://dummyimage.com/100x100.png/dddddd/000000",
            "ip": "192.86.3.21"
        },
        {
            "id": "0bdd3633-d683-432d-add1-4c0d4f841ec3",
            "firstName": "Lois",
            "lastName": "Wheeler",
            "email": "lwheeler7@harvard.edu",
            "avatar": null,
            "ip": "131.205.120.5"
        },
        {
            "id": "c980934a-f54e-459e-8137-0ec3654cdafb",
            "firstName": "Aaron",
            "lastName": "Williams",
            "email": "awilliams8@indiegogo.com",
            "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
            "ip": "88.59.162.204"
        },
        {
            "id": "d11260b2-564a-4a86-8214-7c73765c5d4e",
            "firstName": "Victor",
            "lastName": "Warren",
            "email": "vwarren9@t-online.de",
            "avatar": "http://dummyimage.com/100x100.png/dddddd/000000",
            "ip": "59.3.5.117"
        },
        {
            "id": "73f30d93-f87b-45ea-bda5-60fa4b3716b5",
            "firstName": "Amanda",
            "lastName": "Baker",
            "email": "abakera@craigslist.org",
            "avatar": null,
            "ip": "82.87.241.19"
        },
        {
            "id": "b46cf9e7-9757-4cb9-a9a3-e842bd3af1ba",
            "firstName": "Jane",
            "lastName": "Bailey",
            "email": "jbaileyb@1688.com",
            "avatar": null,
            "ip": "91.91.38.121"
        },
        {
            "id": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            "firstName": "Albert",
            "lastName": "Rose",
            "email": "arosec@bbb.org",
            "avatar": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
            "ip": "20.79.231.223"
        },
        {
            "id": "2984bb94-d4ad-4f51-8885-757e42b19fc9",
            "firstName": "Sara",
            "lastName": "Henry",
            "email": "shenryd@va.gov",
            "avatar": "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
            "ip": "35.102.186.12"
        },
        {
            "id": "3d90a981-a609-412d-9c63-f6e202a928c0",
            "firstName": "Robin",
            "lastName": "Knight",
            "email": "rknighte@kickstarter.com",
            "avatar": null,
            "ip": "122.201.135.94"
        },
        {
            "id": "53153c91-9365-4b8f-b6ca-374c13ca57bc",
            "firstName": "Denise",
            "lastName": "Fowler",
            "email": "dfowlerf@stanford.edu",
            "avatar": null,
            "ip": "197.155.6.188"
        },
        {
            "id": "ba645991-1ab6-491c-8f09-9fe179e1645f",
            "firstName": "Todd",
            "lastName": "Reyes",
            "email": "treyesg@dmoz.org",
            "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
            "ip": "13.187.33.100"
        },
        {
            "id": "205c9b7a-345d-4aa2-9e4c-56f05f72bbe8",
            "firstName": "Jeremy",
            "lastName": "Gomez",
            "email": "jgomezh@cdc.gov",
            "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
            "ip": "153.52.102.218"
        },
        {
            "id": "c4ae7295-e750-4806-b033-270254bceff6",
            "firstName": "Amy",
            "lastName": "Hughes",
            "email": "ahughesi@amazon.co.jp",
            "avatar": null,
            "ip": "92.48.139.211"
        },
        {
            "id": "0d9496c4-2490-40e6-a0c3-0964e371f1ab",
            "firstName": "Henry",
            "lastName": "Harrison",
            "email": "hharrisonj@github.io",
            "avatar": "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
            "ip": "125.12.50.201"
        },
        {
            "id": "3da46271-e3fa-4317-ac29-81ece07ce6c0",
            "firstName": "Melissa",
            "lastName": "Murray",
            "email": "mmurrayk@wikimedia.org",
            "avatar": "http://dummyimage.com/100x100.png/dddddd/000000",
            "ip": "48.209.52.0"
        },
        {
            "id": "976b3c2a-1b2d-4494-8861-eb436d51c160",
            "firstName": "Marie",
            "lastName": "Walker",
            "email": "mwalkerl@yelp.com",
            "avatar": "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
            "ip": "53.83.18.66"
        },
        {
            "id": "16373df5-da0a-4074-8295-f916b94269f4",
            "firstName": "Larry",
            "lastName": "Owens",
            "email": "lowensm@earthlink.net",
            "avatar": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
            "ip": "168.43.167.194"
        },
        {
            "id": "3ccb5cd1-bfc4-4c9d-92ac-f9e88882c269",
            "firstName": "Kevin",
            "lastName": "Harvey",
            "email": "kharveyn@google.nl",
            "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
            "ip": "69.7.169.61"
        },
        {
            "id": "6faaafb6-31ae-460d-8400-4d725deb76d9",
            "firstName": "Kimberly",
            "lastName": "Kim",
            "email": "kkimo@latimes.com",
            "avatar": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
            "ip": "122.147.104.19"
        },
        {
            "id": "92b1c161-8f45-4198-95bb-9b7f58b764b1",
            "firstName": "Tina",
            "lastName": "Turner",
            "email": "tturnerp@techcrunch.com",
            "avatar": null,
            "ip": "37.164.112.92"
        },
        {
            "id": "d6b9f683-84fe-4296-b55b-40ee0a77d54c",
            "firstName": "Doris",
            "lastName": "Murphy",
            "email": "dmurphyq@oracle.com",
            "avatar": "http://dummyimage.com/100x100.png/cc0000/ffffff",
            "ip": "73.236.40.35"
        },
        {
            "id": "77ad1a54-6433-4078-ac49-8caa6f5a786a",
            "firstName": "Phillip",
            "lastName": "Harper",
            "email": "pharperr@who.int",
            "avatar": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
            "ip": "216.61.137.224"
        },
        {
            "id": "7d55a0ef-9434-4fbd-a6cb-6d875420d851",
            "firstName": "Rachel",
            "lastName": "Hanson",
            "email": "rhansons@addtoany.com",
            "avatar": "http://dummyimage.com/100x100.bmp/dddddd/000000",
            "ip": "175.242.237.68"
        },
        {
            "id": "0080f744-e793-4b5e-97ee-8e8413b6d452",
            "firstName": "Peter",
            "lastName": "Henry",
            "email": "phenryt@pen.io",
            "avatar": "http://dummyimage.com/100x100.bmp/ff4444/ffffff",
            "ip": "33.149.176.116"
        },
        {
            "id": "8f818867-d881-4ef2-ac15-b65740c5adc8",
            "firstName": "David",
            "lastName": "Medina",
            "email": "dmedinau@china.com.cn",
            "avatar": "http://dummyimage.com/100x100.png/cc0000/ffffff",
            "ip": "188.44.56.214"
        },
        {
            "id": "505c8743-7886-43f0-810b-f1cf43862267",
            "firstName": "Judith",
            "lastName": "Stewart",
            "email": "jstewartv@bbc.co.uk",
            "avatar": "http://dummyimage.com/100x100.png/cc0000/ffffff",
            "ip": "68.152.10.179"
        },
        {
            "id": "d54ab89e-e7e5-4ba4-8cdb-9b265f80d379",
            "firstName": "Joyce",
            "lastName": "Marshall",
            "email": "jmarshallw@home.pl",
            "avatar": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
            "ip": "100.207.88.7"
        },
        {
            "id": "997fd037-2ab6-4490-aedf-263b7cd7ece3",
            "firstName": "Carl",
            "lastName": "Green",
            "email": "cgreenx@ftc.gov",
            "avatar": "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
            "ip": "130.169.34.16"
        },
        {
            "id": "accc20d4-ce4c-451b-8548-e1a5ce1ce623",
            "firstName": "Annie",
            "lastName": "Brown",
            "email": "abrowny@flickr.com",
            "avatar": null,
            "ip": "209.161.39.188"
        },
        {
            "id": "7d4b8f6d-dcc1-4439-9571-e68022f7dafe",
            "firstName": "Wanda",
            "lastName": "Gonzalez",
            "email": "wgonzalezz@va.gov",
            "avatar": "http://dummyimage.com/100x100.png/ff4444/ffffff",
            "ip": "152.83.34.123"
        },
        {
            "id": "fc5eea6c-8f44-4878-899c-40b7067ce2a3",
            "firstName": "Rebecca",
            "lastName": "Cox",
            "email": "rcox10@wikimedia.org",
            "avatar": "http://dummyimage.com/100x100.bmp/cc0000/ffffff",
            "ip": "96.248.226.12"
        },
        {
            "id": "25bc59fd-1832-4eb4-964b-ff319e763494",
            "firstName": "Betty",
            "lastName": "Hill",
            "email": "bhill11@java.com",
            "avatar": null,
            "ip": "195.174.102.212"
        },
        {
            "id": "976c4919-a8b4-4807-bebb-84ca8448be32",
            "firstName": "Peter",
            "lastName": "Howard",
            "email": "phoward12@chronoengine.com",
            "avatar": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
            "ip": "119.0.16.195"
        },
        {
            "id": "0f116c9d-717d-4d6f-9d6b-cc8e17d7697c",
            "firstName": "Emily",
            "lastName": "Green",
            "email": "egreen13@berkeley.edu",
            "avatar": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
            "ip": "109.149.214.246"
        },
        {
            "id": "65bc5c87-911b-4a50-bf2c-38aca58680af",
            "firstName": "Anna",
            "lastName": "Freeman",
            "email": "afreeman14@state.gov",
            "avatar": null,
            "ip": "2.215.222.157"
        },
        {
            "id": "fb587e3a-c189-4f29-b847-6b063bae0d0e",
            "firstName": "Philip",
            "lastName": "Howell",
            "email": "phowell15@nymag.com",
            "avatar": "http://dummyimage.com/100x100.png/ff4444/ffffff",
            "ip": "72.225.150.86"
        },
        {
            "id": "2f6a0efc-27b3-4545-bf7f-980f6b28afd0",
            "firstName": "Henry",
            "lastName": "Elliott",
            "email": "helliott16@apple.com",
            "avatar": "http://dummyimage.com/100x100.png/ff4444/ffffff",
            "ip": "82.96.252.113"
        },
        {
            "id": "898fc6d4-5706-44d2-b1f3-eb8908e8a3c3",
            "firstName": "Benjamin",
            "lastName": "Pierce",
            "email": "bpierce17@homestead.com",
            "avatar": null,
            "ip": "16.176.221.180"
        },
        {
            "id": "879fa0f9-0f78-4411-bebd-a86f3462a094",
            "firstName": "Ruby",
            "lastName": "West",
            "email": "rwest18@bing.com",
            "avatar": null,
            "ip": "100.228.182.104"
        },
        {
            "id": "a5d8536d-06e1-47a7-9c65-3d3ac0d993b5",
            "firstName": "Steven",
            "lastName": "Henry",
            "email": "shenry19@desdev.cn",
            "avatar": "http://dummyimage.com/100x100.png/cc0000/ffffff",
            "ip": "49.53.155.36"
        },
        {
            "id": "2027fab0-603a-4e38-a218-59609b3fbe80",
            "firstName": "Kimberly",
            "lastName": "King",
            "email": "kking1a@sina.com.cn",
            "avatar": "http://dummyimage.com/100x100.bmp/dddddd/000000",
            "ip": "239.107.26.230"
        },
        {
            "id": "c7e7fc14-7d86-4eb6-a8fe-d9a55697b330",
            "firstName": "Phillip",
            "lastName": "Montgomery",
            "email": "pmontgomery1b@acquirethisname.com",
            "avatar": null,
            "ip": "8.28.120.38"
        },
        {
            "id": "ca7fe54f-c348-4d5f-a2ff-2462e82b9377",
            "firstName": "Sara",
            "lastName": "Shaw",
            "email": "sshaw1c@naver.com",
            "avatar": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff",
            "ip": "51.26.86.127"
        },
        {
            "id": "1c7235f5-c640-41e6-944e-97e638d20c16",
            "firstName": "Sharon",
            "lastName": "Jacobs",
            "email": "sjacobs1d@over-blog.com",
            "avatar": "http://dummyimage.com/100x100.png/dddddd/000000",
            "ip": "44.184.159.48"
        }
    ]);
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// start the server listening for requests
app.listen(process.env.PORT || 3001,
    () => console.log("Server is running..."));