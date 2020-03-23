<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
class StatusController extends AbstractController
{
    /**
     * @Route("/Application/status/")
     */
    public function number(): Response
    {
        return $this->render('Status.html.twig');
    }
}
