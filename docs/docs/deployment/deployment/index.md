This section describes the process for deploying the Service Workbench.

## Run the Main Deployment Script

1.	Run the main deployment script using the command below. It takes 15-20 minutes to execute the command:
```
scripts/environment-deploy.sh <stage>
```
2.	After the deployment completes successfully, make a note of its [Amazon CloudFront](https://aws.amazon.com/cloudfront/?nc2=type_a) URL and the **root** password. You can also retrieve this information later by running the following command: 
```
scripts/get-info.sh <stage>
```
3.	Log in to your Service Workbench deployment using the [Amazon CloudFront](https://aws.amazon.com/cloudfront/?nc2=type_a) URL and root user credentials. The **root** user must be used only to create administrators. For more information, see [Post Deployment](/deployment/post_deployment/index).

## Deploy the Machine Images SDC

The machine images SDC provides the ability to launch Amazon EC2 images from within Service Workbench. The default Service Workbench installation currently provides [Amazon Sagemaker](https://aws.amazon.com/sagemaker/?nc2=type_a), [Amazon EMR](https://aws.amazon.com/emr/?nc2=type_a&whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc), and Linux-based and Windows-based Amazon EC2 as workspace options. The Amazon EC2 and Amazon EMR options will not be available unless you create the corresponding machine images.

_**Note**: You can create your own machine image if you do not wish to use the ones included in this SDC._

To deploy the machine images SDC, follow the steps outlined in the readme file located in `main/solution/machine-images/README.md`. Additionally, perform the following actions: 

1.	Install Packer 1.6.0 by using [pkenv](https://github.com/iamhsa/pkenv). Packer 1.6.0 creates a custom AMI that is uploaded to the Service Workbench deployment.
2.	Change directory to `/main/solution/machine-images`. 
3.	Run the command below. The command takes approximately 15 minutes to complete: 
```
pnpx serverless build-image -s <mystage>
```
- ** If the above command does not work, you might have to fetch the custom AMI package created in step 1 with `curl` or `wget`, unzip the package, and copy it to the `directory /usr/local/bin`. Resume from step 2.**

For examples of how to build a custom AMI, refer to the following scripts:

–	`config/infra/packer-ec2-<platform>-workspace.json`

–	`config/infra/provisioners/provision-hail.sh`

