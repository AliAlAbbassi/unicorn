import { NextLayoutComponentType } from "next";
import { useRouter } from "next/router";
import { PFiles } from "../../../data";
import Layout from '../../layouts/Layout'

interface PatientProps { }
const Patient: NextLayoutComponentType<PatientProps> = ({ }) => {
    const router = useRouter()
    const id = router.query.patientId as unknown as Number
    const data: PFiles[] = PFiles.filter((v) => v.id == id)
    const { name, status } = data[0]
    return <div>Patient {name} is {status}</div>
}

Patient.getLayout = (page) => (
    <Layout layoutType="NoBgColor">{page}</Layout>
)
export default Patient