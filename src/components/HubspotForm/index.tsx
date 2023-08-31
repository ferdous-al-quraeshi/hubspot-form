import { useHubspotForm } from 'next-hubspot';

const HubspotForm = () => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: `${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}`,
        formId: `${process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID}`,
        target: '#hubspot-form-wrapper'
    });

    return (
        <div id="hubspot-form-wrapper" />
    )
}

export default HubspotForm
