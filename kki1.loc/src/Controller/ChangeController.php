<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
class ChangeController extends AbstractController
{
    /**
     * @Route("/Application/Change/")
     */
    public function number(): Response
    {
        return $this->render('ChangeZnop.html.twig');
    }
}
